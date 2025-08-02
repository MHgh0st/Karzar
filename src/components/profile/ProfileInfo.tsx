"use client";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Image as HeroImage,
  Chip,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function ProfileInfo() {
  return (
    <>
      <Card shadow="none" className="w-full">
        <CardHeader className="flex flex-col sm:flex-row gap-3 sm:gap-x-2 items-center sm:items-start">
          <HeroImage
            as={Image}
            src="/Images/profiles/1.jpg"
            width={60}
            height={60}
            className="sm:w-[65px] sm:h-[65px]"
            radius="lg"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-right">
            <p className="text-lg sm:text-xl font-medium">محمد حسین غلامی</p>
            <Chip variant="flat" color="warning" size="sm" radius="sm" className="mt-1 sm:mt-0">
              دانشجو
            </Chip>
          </div>
        </CardHeader>
        <CardFooter className="flex gap-2 sm:gap-x-2">
          <Button color="danger" variant="flat" isIconOnly size="sm" className="self-center sm:self-auto">
            <Icon
              icon="solar:logout-2-bold-duotone"
              className="rotate-180 text-lg sm:text-xl"
            />
          </Button>
          <Button
            color="primary"
            variant="flat"
            fullWidth
            size="sm"
            startContent={
              <Icon icon="solar:settings-bold-duotone" className="text-lg sm:text-xl" />
            }
          >
          تنظیمات پروفایل
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
