"use client";
import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function CommentBubble() {
  return (
    <div className="flex gap-x-4 items-start">
      <Avatar src="/Images/profiles/1.jpg" radius="md" className="shrink-0" />
      <div className="flex flex-col gap-y-0.5 ">
        <p className="font-bold">محمد حسین غلامی</p>
        <p className="font-thin text-xs">30 خرداد 1404 | 16:46</p>
        <p className="mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="flex gap-x-2 mt-1">
          <Button
            color={false ? "danger" : undefined}
            variant="flat"
            startContent={
              <Icon icon="solar:like-bold-duotone" className="text-lg" />
            }
            size="sm"
          >
            58
          </Button>
          <Button
            color={false ? "danger" : undefined}
            variant="flat"
            startContent={
              <Icon icon="solar:dislike-bold-duotone" className="text-lg" />
            }
            size="sm"
          >
            9
          </Button>
        </div>
      </div>
    </div>
  );
}
