"use client";
import {
  Input,
  Button,
  Select,
  SelectItem,
  DatePicker,
  Checkbox,
  Form,
} from "@heroui/react";
import Editor from "@/components/campaign-create/Editor";
import type { Editor as TiptapEditor } from "@tiptap/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ImageUploader from "@/components/campaign-create/ImageUploader";
import {
  CalendarDate,
  PersianCalendar,
  now,
  toCalendar,
} from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const CreateCampaignSchema = z.object({
  title: z.string().min(1, "عنوان کارزار نمیتواند خالی باشد"),
  author: z.string().min(1, "نام نویسنده نمیتواند خالی باشد"),
  supporters: z.string().min(1, "این فیلد نمیتواند خالی باشد"),
  endDate: z.any(),
  body: z
    .string()
    .min(1, "متن کارزار نمیتواند خالی باشد")
    .refine(
      (value) => value.replace(/<[^>]*>?/gm, "").trim().length >= 50,
      "متن کارزار باید حداقل 50 کاراکتر داشته باشد"
    ),
  image: z
    .any()
    .refine((file) => !!file, "لطفا یک تصویر انتخاب کنید.")
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      `حداکثر حجم تصویر 2 مگابایت است.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "فقط فرمت های .jpg, .jpeg, .png و .webp پشتیبانی میشوند."
    ),
});

export type CreateCampaignFormInputs = z.infer<typeof CreateCampaignSchema>;

export interface CreateCampaignFormProps {
  onSubmit: (data: CreateCampaignFormInputs) => void;
}

export default function CreateCampaignForm({
  onSubmit,
}: CreateCampaignFormProps) {
  const [editorInstance, setEditorInstance] = useState<TiptapEditor | null>(
    null
  );
  const persianCalendar = new PersianCalendar();
  const today = toCalendar(now("Asia/Tehran"), persianCalendar);
  const todayPersian = new CalendarDate(
    persianCalendar,
    today.year,
    today.month,
    today.day
  );
  const [date, setDate] = useState(todayPersian);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateCampaignFormInputs>({
    resolver: zodResolver(CreateCampaignSchema),
  });

  const fontSizeData: { key: number; label: string }[] = [];
  for (let i = 4; i <= 60; i += 4) {
    fontSizeData.push({ key: i, label: `${i}` });
  }

  const [fontSize, setFontSize] = useState("16");

  useEffect(() => {
    if (!editorInstance) {
      return;
    }

    const handleUpdate = () => {
      const size =
        editorInstance.getAttributes("textStyle").fontSize?.replace("px", "") ||
        "16";
      setFontSize(size);
      setValue("body", editorInstance.getHTML());
    };

    editorInstance.on("transaction", handleUpdate);
    editorInstance.on("selectionUpdate", handleUpdate);

    return () => {
      editorInstance.off("transaction", handleUpdate);
      editorInstance.off("selectionUpdate", handleUpdate);
    };
  }, [editorInstance, setValue]);

  const submitForm = async (data: CreateCampaignFormInputs) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-8 px-4 md:px-0">
      <p className="font-bold text-3xl">ساخت کارزار جدید:</p>
      <Form
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-8"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="lg:col-span-6 flex flex-col gap-y-4 sm:gap-y-6">
          <Input
            label="عنوان کارزار"
            description="بهتر است عنوان کارزار حداکثر محدود به دوازده کلمه باشد. عنوان کارزار می‌تواند با کلمه «درخواست» آغاز شود و طی یک جمله اصل مطالبه نویسندگان و امضاکنندگان را بیان کند. طولانی بودن بیش از حد تیتر و یا ناواضح بودن آن سبب کمتر دیده شدن یک کارزار خواهد شد."
            labelPlacement="outside"
            placeholder="عنوان کارزار را وارد کنید"
            size="lg"
            {...register("title")}
            isInvalid={!!errors.title}
            errorMessage={errors.title?.message}
          />
          <Input
            label="نام نویسنده"
            description="نویسنده یک کارزار نمیتواند جمعی از دانشجویان یا چیز هایی شبیه به آن باشد، بلکه باید به نام یک یا چند نفر،یا به نام یک انجمن یا سازمان رسمی باشد. کارزار های بدون نام منتشر نخواهند شد."
            labelPlacement="outside"
            placeholder="نام نویسنده را وارد کنید"
            size="lg"
            {...register("author")}
            isInvalid={!!errors.author}
            errorMessage={errors.author?.message}
          />
          <Input
            label="این بیانیه توسط چه بخشی از مردم حمایت میشود؟"
            description="مثل بازنشستگان فرهنگی، دانشجویان و ..."
            labelPlacement="outside"
            placeholder="دانشجویان"
            size="lg"
            {...register("supporters")}
            isInvalid={!!errors.supporters}
            errorMessage={errors.supporters?.message}
          />
          <ImageUploader
            placeholder="تصویر کارزار خود را آپلود کنید."
            onImageSelect={(file) => {
              setValue("image", file, { shouldValidate: true });
            }}
          />
          {errors.image && (
            <p className="text-danger-500 text-sm -mt-4">
              {errors.image.message as string}
            </p>
          )}

          <I18nProvider locale="fa-IR-u-ca-persian">
            <DatePicker
              showMonthAndYearPickers
              value={date}
              minValue={todayPersian}
              onChange={(value) => {
                if (value) {
                  setDate(value);
                  setValue("endDate", value);
                }
              }}
              label="تاریخ پایان کارزار"
              labelPlacement="outside"
              size="lg"
            />
          </I18nProvider>
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-col">
            <p className="text-sm mb-2 sm:mb-1">متن کارزار:</p>
            <Editor
              className="bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-200 p-2 sm:p-3 rounded-xl focus:outline-0 h-80 sm:h-96 lg:h-100 overflow-y-auto transition-all"
              onEditorReady={(editor) => setEditorInstance(editor)}
            />
            <div className="flex gap-2 mt-3 sm:mt-2">
              <Button
                variant="flat"
                isIconOnly
                size="sm"
                onPress={() => {
                  editorInstance?.chain().focus().toggleBold().run();
                }}
              >
                <Icon
                  icon="solar:text-bold-square-bold-duotone"
                  className="text-base sm:text-lg"
                />
              </Button>
              {Array.from({ length: 3 }, (_, i) => {
                const level = (i + 1) as 1 | 2 | 3;
                return (
                  <Button
                    variant="flat"
                    isIconOnly
                    size="sm"
                    onPress={() =>
                      editorInstance
                        ?.chain()
                        .focus()
                        .toggleHeading({ level: level })
                        .run()
                    }
                    key={`Heading-${level}`}
                  >
                    <span className="text-xs sm:text-sm">H{level}</span>
                  </Button>
                );
              })}

              <Select
                items={fontSizeData}
                size="sm"
                selectedKeys={[fontSize]}
                onSelectionChange={(key) => {
                  const value = Array.from(key)[0] as string;
                  editorInstance
                    ?.chain()
                    .focus()
                    .setFontSize(`${value}px`)
                    .run();
                  setFontSize(value);
                }}
                variant="flat"
              >
                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
              </Select>
            </div>
            <Checkbox className="mt-4 sm:mt-4" isRequired size="lg">
              <p className="text-sm font-light">با قوانین و مقررات موافقم</p>
            </Checkbox>
            <Button
              fullWidth
              className="mt-4 sm:mt-2"
              color="primary"
              size="lg"
              type="submit"
              isLoading={isLoading}
            >
              ثبت و انتشار کارزار
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
