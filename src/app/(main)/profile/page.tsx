"use client";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Tabs from "@/components/profile/Tabs";
import { useState, useEffect } from "react";
import { EnumTabs } from "@/enums/profile/EnumTabs";
import type { KarzarCard } from "@/types/types";
import KarzarPreview from "@/components/KarzarPreview";
import SkeletonPreview from "@/components/SkeletonPreview";
const tabsData = [
  {
    id: EnumTabs.AllCampaigns,
    title: "کارزار های من",
    icon: "solar:volume-loud-bold-duotone",
  },
  {
    id: EnumTabs.MySignatures,
    title: "امضا های من",
    icon: "solar:pen-bold-duotone",
  },
];

export default function Profile() {
  const [tab, setTab] = useState<number>(0);
  const [karzarsData, setKarzarsData] = useState<KarzarCard[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getData = async (id: number = EnumTabs.AllCampaigns) => {
    setIsLoading(true);
    await sleep(1000);
    switch (id) {
      case EnumTabs.AllCampaigns:
        setKarzarsData([
          {
            id: 1,
            imgUrl: "/Images/Karzars/1.jpg",
            title: "درخواست برداشتن محدودیت اینترنت بین‌المللی در وضعیت جنگی",
            sender:
              "عموم مردم شریف ایران، ,دانشجویان، برنامه‌نویسان، و خبرنگاران",
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
        ]);
        break;
      case EnumTabs.MySignatures:
        setKarzarsData([
          {
            id: 1,
            imgUrl: "/Images/Karzars/1.jpg",
            title: "درخواست برداشتن محدودیت اینترنت بین‌المللی در وضعیت جنگی",
            sender:
              "عموم مردم شریف ایران، ,دانشجویان، برنامه‌نویسان، و خبرنگاران",
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
        ]);
        break;
    }
    setIsLoading(false);
  };

  const changeTab = async (id: number) => {
    if (id === tab) return;
    await getData(id);
    setTab(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-x-4 md:max-w-[1240px] mx-auto mt-4 sm:mt-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-3 flex flex-col gap-y-2 ">
          <ProfileInfo />
          <div className="flex lg:flex-col gap-2 lg:gap-y-2">
            {tabsData.map((item, index) => (
              <Tabs
                key={index}
                data={item}
                onPress={changeTab}
                isActive={item.id === tab}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 overflow-y-auto h-full order-1 lg:order-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SkeletonPreview classname="lg:col-span-6" key={index} />
              ))
            : karzarsData?.map((item) => (
                <KarzarPreview
                  key={item.id}
                  classname="lg:col-span-6"
                  data={item}
                />
              ))}
        </div>
      </div>
    </>
  );
}
