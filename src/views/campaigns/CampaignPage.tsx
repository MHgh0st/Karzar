"use client";
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

export interface CampaignProps {
  id: number;
  title: string;
  author: string;
  isSuccess?: boolean;
  isSigned?: boolean;
  signaturesCount: number;
  body: string;
  from: string;
  startDate: string;
  endDate: string;
}

export interface Props {
  data: CampaignProps;
  classname?: string;
}

export default function CampaignPage(props: Props) {
  return (
    <>
      <div className="md:max-w-[1240px] mx-auto mt-4 sm:mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <HeroImage
              as={Image}
              src={`/Images/Karzars/${props.data.id}.jpg`}
              width={80}
              height={80}
              className="sm:w-[120px] sm:h-[120px] flex-shrink-0"
              alt={`Karzar-${props.data.id}`}
            />
            <div className="flex flex-col gap-y-2 flex-1 min-w-0 items-center md:items-start">
              <p className="font-bold text-lg sm:text-xl lg:text-2xl max-w-[600px] text-center md:text-right">
                {props.data.title}
              </p>
              <div className="flex gap-2 sm:gap-x-4">
                <Chip variant="flat" size="sm" radius="sm" className="w-fit">
                  نویسنده: {props.data.author}
                </Chip>
                {props.data.isSuccess && (
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
                )}
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <Tooltip content="لینک کارزار را کپی کنید." showArrow>
              <Button isIconOnly color="primary" variant="flat" size="sm">
                <Icon
                  icon="solar:copy-bold-duotone"
                  className="text-lg sm:text-xl"
                />
              </Button>
            </Tooltip>
            <div className="flex flex-col items-center">
              {props.data.isSigned ? (
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
                    <Icon
                      icon="solar:pen-2-bold-duotone"
                      className="text-lg sm:text-xl"
                    />
                  }
                >
                  امضا کنید
                </Button>
              )}
              <p className="text-xs sm:text-sm font-thin mt-1 text-center">
                {props.data.signaturesCount} نفر امضا کرده اند.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/20 px-4 sm:px-8 lg:px-[140px] py-6 sm:py-8 lg:py-10 rounded-[25px] mt-6 sm:mt-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            متن کارزار:
          </h3>
          <p className="leading-6 sm:leading-7 text-sm sm:text-base">
            {props.data.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8">
            <Chip radius="sm" size="sm" className="w-fit">
              از طرف: {props.data.from}
            </Chip>
            <Chip radius="sm" size="sm" className="w-fit">
              شروع کارزار: {props.data.startDate}
            </Chip>
            <Chip radius="sm" size="sm" className="w-fit">
              اتمام کارزار: {props.data.endDate}
            </Chip>
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
            <h5 className="text-xl sm:text-2xl font-bold">
              این کارزارها را هم حمایت کنید:
            </h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {PreviewData.map((item) => (
              <KarzarPreview key={item.id} classname="w-full" data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
