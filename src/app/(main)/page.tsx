"use client";
import Header from "@/components/landing/Header";
import KarzarPreview from "@/components/KarzarPreview";
import { Button } from "@heroui/react";
import type { KarzarCard } from "@/types/types";
const data: KarzarCard[] = [
  {
    id: 1,
    imgUrl: "/Images/Karzars/1.jpg",
    title: "درخواست برداشتن محدودیت اینترنت بین‌المللی در وضعیت جنگی",
    sender: "عموم مردم شریف ایران، ,دانشجویان، برنامه‌نویسان، و خبرنگاران",
    votedNum: 72525,
    targetNum: 100000,
  },
  {
    id: 2,
    imgUrl: "/Images/Karzars/2.jpeg",
    title: "درخواست اجرای فوق‌العاده خاص برای کارکنان دولت",
    sender: "دانش آموزان برجسته و با استعداد",
    votedNum: 36023,
    targetNum: 21000,
  },
  {
    id: 3,
    imgUrl: "/Images/Karzars/3.jpg",
    title: "درخواست لغو محدودیت سال اخذ دیپلم فرهنگیان بدون کنکور",
    sender: "کارکنان دولت",
    votedNum: 183,
    targetNum: 1500,
  },
  {
    id: 4,
    imgUrl: "/Images/Karzars/4.jpg",
    title: "درخواست تحریم شبکه اینترنشنال",
    sender: "مردم ایران",
    votedNum: 22084,
    targetNum: 22084,
  },
  {
    id: 5,
    imgUrl: "/Images/Karzars/5.jpeg",
    title: "اعتراض به واگذاری بانک رفاه کارگران به دولت",
    sender: "کارگران، بازنشستگان تامین اجتماعی و حقوق‌دانان",
    votedNum: 19586,
    targetNum: 22084,
  },
  {
    id: 6,
    imgUrl: "/Images/Karzars/2.jpeg",
    title:
      "لزوم تعویق کنکور سراسری تیر ۱۴۰۴ به دلیل عدم تمرکز و تشویش اذهان داوطلبان",
    sender: "داوطلبان کنکور 1404",
    votedNum: 1426,
    targetNum: 3789,
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-primary/20 rounded-[25px] -mt-40 mx-4 sm:mx-6 md:mx-8 md:pt-40 pt-8 pb-10">
        <div className="md:max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="md:mt-20 mt-16 flex flex-col">
            <div className="flex  justify-between items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-xl sm:text-2xl font-medium">جدیدترین کارزار ها</p>
              <Button color="primary" variant="light" size="sm">
                همه کارزار ها
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {data.map((item) => (
                <KarzarPreview
                  key={item.id}
                  classname="w-full"
                  data={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
