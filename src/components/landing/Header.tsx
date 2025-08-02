"use client";
import { Button, Input, Image as HeroImage, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import HeaderImage from "@/assets/Images/Header.jpg";
export default function Header() {
  return (
    <>
      <div className="md:max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mt-8 text-center leading-tight sm:leading-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          درخواست بده، امضا بگیر،
          <br /> تغییر ایجاد کن
        </div>
        <div className="mt-4 text-center text-base sm:text-lg px-4">
          درخواست‌های خودت رو ثبت کن یا به ایده‌های دیگران رأی بده تا پیگیری
          بشن.
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-x-2 mt-4 px-4">
          <Button
            color="primary"
            variant="flat"
            className="w-full sm:w-auto"
            startContent={
              <Icon
                icon="solar:question-square-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
          >
            درباره کارزار
          </Button>
          <Link href="/campaigns/create">
          <Button
            color="primary"
            className="w-full sm:w-auto"
            startContent={
              <Icon icon="solar:user-speak-bold-duotone" className="text-lg sm:text-xl" />
            }
          >
            ایجاد کارزار
          </Button></Link>
        </div>
        <div className="mt-8 px-4">
          <Input
            size="lg"
            placeholder="موضوع کارزار یا کد آن را وارد کنید"
            startContent={
              <Icon icon="solar:magnifer-bold-duotone" className="text-xl sm:text-2xl" />
            }
            endContent={
              <Button color="primary" variant="light" size="lg" radius="lg" >
                جستجو
              </Button>
            }
            classNames={{
              inputWrapper: "pl-0",
            }}
            className="hidden sm:flex"
          />
          <Input
            size="sm"
            placeholder="موضوع کارزار یا کد آن را وارد کنید"
            startContent={
              <Icon icon="solar:magnifer-bold-duotone"   />
            }
            fullWidth
            className="sm:hidden"
          />
          <Button 
            color="primary" 
            variant="light" 
            size="sm" 
            radius="sm" 
            className="w-full mt-2 sm:hidden"
          >
            جستجو
          </Button>
        </div>
        <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl mt-4 mx-4">
          <HeroImage
            as={Image}
            src={HeaderImage}
            alt="Collaboration Image"
            classNames={{
              img: "object-cover object-top w-full h-full",
            }}
          />
        </div>
      </div>
    </>
  );
}
