"use client";
import {
  Input,
  Button,
  Select,
  SelectItem,
  DatePicker,
  Checkbox,
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

interface Props {
  classname?: string;
}
export default function CreateCampaignForm({ classname }: Props) {
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
    };

    editorInstance.on("transaction", handleUpdate);
    editorInstance.on("selectionUpdate", handleUpdate);

    return () => {
      editorInstance.off("transaction", handleUpdate);
      editorInstance.off("selectionUpdate", handleUpdate);
    };
  }, [editorInstance]);

  return (
    <div className={`${classname} grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8`}>
      <div className="lg:col-span-6 flex flex-col gap-y-4 sm:gap-y-6">
        <Input
          label="عنوان کارزار"
          description="بهتر است عنوان کارزار حداکثر محدود به دوازده کلمه باشد. عنوان کارزار می‌تواند با کلمه «درخواست» آغاز شود و طی یک جمله اصل مطالبه نویسندگان و امضاکنندگان را بیان کند. طولانی بودن بیش از حد تیتر و یا ناواضح بودن آن سبب کمتر دیده شدن یک کارزار خواهد شد."
          labelPlacement="outside"
          placeholder="عنوان کارزار را وارد کنید"
          size="lg"
        />
        <Input
          label="نام نویسنده"
          description="نویسنده یک کارزار نمیتواند جمعی از دانشجویان یا چیز هایی شبیه به آن باشد، بلکه باید به نام یک یا چند نفر،یا به نام یک انجمن یا سازمان رسمی باشد. کارزار های بدون نام منتشر نخواهند شد."
          labelPlacement="outside"
          placeholder="نام نویسنده را وارد کنید"
          size="lg"
        />
        <Input
          label="این بیانیه توسط چه بخشی از مردم حمایت میشود؟"
          description="مثل بازنشستگان فرهنگی، دانشجویان و ..."
          labelPlacement="outside"
          placeholder="دانشجویان"
          size="lg"
        />
        <ImageUploader placeholder="تصویر کارزار خود را آپلود کنید." />

        <I18nProvider locale="fa-IR-u-ca-persian">
          <DatePicker
            showMonthAndYearPickers
            value={date}
            minValue={todayPersian}
            onChange={(value) => {
              if (value) {
                setDate(value);
                console.log("picked date: ", value);
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
                editorInstance?.chain().focus().setFontSize(`${value}px`).run();
                setFontSize(value);
              }}
              variant="flat"
              // className="min-w-[60px] sm:min-w-[80px]"
            >
              {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>
          </div>
          <Checkbox
            className="mt-4 sm:mt-4"
            onChange={(isSelected) => {
              console.log("Checkbox is now: ", isSelected);
            }}
            size="lg"
          >
            <p className="text-sm font-light">با قوانین و مقررات موافقم</p>
          </Checkbox>
          <Button fullWidth className="mt-4 sm:mt-2" color="primary" size="lg">
            ثبت و انتشار کارزار
          </Button>
        </div>
      </div>
    </div>
  );
}
