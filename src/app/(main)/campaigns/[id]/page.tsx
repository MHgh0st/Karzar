"use client";
import { useParams } from "next/navigation";
import {
  Image as HeroImage,
  Button,
  Tooltip,
  Chip,
  Link,
  Divider,
  Pagination,
} from "@heroui/react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import SendComment from "@/components/campaignPage/SendComment";
import CommentBubble from "@/components/campaignPage/CommentBubble";
import { PreviewData } from "@/fake-data/Campaigns";
import KarzarPreview from "@/components/KarzarPreview";

export default function Campaign() {
  const params = useParams();
  return (
    <div className="md:max-w-[1240px] mx-auto mt-4 sm:mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
          <HeroImage
            as={Image}
            src={`/Images/Karzars/${params.id}.jpg`}
            width={80}
            height={80}
            className="sm:w-[120px] sm:h-[120px] flex-shrink-0"
            alt={`Karzar-${params.id}`}
          />
          <div className="flex flex-col gap-y-2 flex-1 min-w-0 items-center md:items-start">
            <p className="font-bold text-lg sm:text-xl lg:text-2xl max-w-[600px] text-center md:text-right">
              درخواست برداشتن محدودیت اینترنت بین‌المللی در وضعیت جنگی
            </p>
            <div className="flex gap-2 sm:gap-x-4">
              <Chip variant="flat" size="sm" radius="sm" className="w-fit">
                نویسنده: محمد حسین غلامی
              </Chip>
              <Link href="#">
                <Tooltip content="لینک موفقیت کارزار" size="sm" showArrow>
                  <Chip
                    color="success"
                    radius="sm"
                    size="sm"
                    startContent={
                      <Icon
                        icon="material-symbols:check-rounded"
                        className="text-base sm:text-lg"
                      />
                    }
                    className="w-fit"
                  >
                    این کارزار موفق شد
                  </Chip>
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center">
            <Tooltip content="لینک کارزار را کپی کنید." showArrow>
              <Button isIconOnly color="primary" variant="flat" size="sm">
                <Icon icon="solar:copy-bold-duotone" className="text-lg sm:text-xl" />
              </Button>
            </Tooltip>
          <div className="flex flex-col items-center">
            {true ? (
              <Button
                color="success"
                size="sm"
                startContent={
                  <Icon
                    icon="material-symbols:check-rounded"
                    className="text-lg sm:text-xl"
                  />
                }
              >
                امضا کردید
              </Button>
            ) : (
              <Button
                color="primary"
                size="sm"
                startContent={
                  <Icon icon="solar:pen-2-bold-duotone" className="text-lg sm:text-xl" />
                }
              >
                امضا کنید
              </Button>
            )}
            <p className="text-xs sm:text-sm font-thin mt-1 text-center">1459 نفر امضا کرده اند.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/20 px-4 sm:px-8 lg:px-[140px] py-6 sm:py-8 lg:py-10 rounded-[25px] mt-6 sm:mt-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">متن کارزار:</h3>
        <p className="leading-6 sm:leading-7 text-sm sm:text-base">
          جناب دکتر پزشکیان رئیس‌جمهور محترم و ریاست شورای عالی امنیت ملی جناب
          دکتر قالیباف ریاست محترم مجلس شورای اسلامی جناب دکتر مومنی وزیر محترم
          کشور و ریاست شورای امنیت کشور جناب دکتر سیمایی صراف وزیر محترم علوم و
          ریاست شورای سنجش و پذیرش دانشجو با سلام و احترام، اینجانبان، داوطلبان
          کنکور سراسری تیر ۱۴۰۴، با دغدغه‌ای عمیق نسبت به شرایط سخت و ناپایدار
          روانی و اجتماعی حاکم بر کشور، به استحضار می‌رسانیم که در روزهای اخیر،
          فشارهای روحی ناشی از وضعیت جنگی، تهدیدات امنیتی، فضای پراضطراب
          رسانه‌ای و تنش‌های منطقه‌ای، تأثیر قابل توجهی بر تمرکز، آمادگی و سلامت
          روانی داوطلبان کنکور سراسری تیر گذاشته است. در چنین شرایطی، برگزاری
          این آزمون سرنوشت‌ساز بدون در نظر گرفتن واقعیت‌های روانی حاکم، موجب
          اضطراب مضاعف و افت عملکرد داوطلبان خواهد شد و این موضوع می‌تواند تبعات
          منفی بلندمدتی برای خود داوطلبان و روند آموزش عالی کشور به همراه داشته
          باشد. لذا با احترام، از شما سروران گرامی تقاضا داریم تا دستور تعویق
          حداقل دو هفته‌ای زمان برگزاری کنکور سراسری تیر ۱۴۰۴ را صادر فرمایید تا
          ضمن آرام‌سازی فضای جامعه، فرصتی برای ترمیم روحی و روانی داوطلبان فراهم
          گردد. این تصمیم می‌تواند نشانه‌ای از همدلی مسئولان با نسل جوان و
          اهتمام جدی به عدالت آموزشی در شرایط بحرانی باشد. برگزاری کنکور سراسری
          در این شرایط، علاوه بر ایجاد اضطراب و نگرانی، سلامت جسمی و روانی
          داوطلبان را تهدید می‌کند. پیشاپیش از حسن توجه و تدبیر شما سروران گرامی
          سپاسگزاریم و امیدواریم صدای کنکوری‌ها شنیده شود. با آرزوی پیروزی و
          سرافرازی ایران عزیزمان
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8">
          <Chip radius="sm" size="sm" className="w-fit">از طرف: مردم ایران</Chip>
          <Chip radius="sm" size="sm" className="w-fit">شروع کارزار: 25 خرداد 1404</Chip>
          <Chip radius="sm" size="sm" className="w-fit">اتمام کارزار: 7 بهمت 1404</Chip>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-10">
        <div className="flex items-center justify-between">
          <h5 className="text-xl sm:text-2xl font-bold">نظرات و گفتگو ها</h5>
        </div>
        <SendComment className="mt-4" />
        <Divider className="my-4" />
        <div className="flex flex-col gap-y-6 sm:gap-y-10 items-center">
          <CommentBubble />
          <CommentBubble />
          <CommentBubble />
          <Pagination
            initialPage={8}
            total={8}
            dir="ltr"
            variant="flat"
            color="primary"
            size="sm"
            classNames={{
              item: "cursor-pointer",
            }}
          />
        </div>
      </div>
      
      <div className="mt-8 sm:mt-10">
        <div className="flex items-center justify-between">
          <h5 className="text-xl sm:text-2xl font-bold">این کارزارها را هم حمایت کنید:</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {PreviewData.map((item) => (
            <KarzarPreview key={item.id} classname="w-full" data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
