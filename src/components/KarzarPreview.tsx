"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image as HeroImage,
  Progress,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { KarzarCard } from "@/types/types";
type Props = {
  data: KarzarCard;
  classname?: string;
};

export default function KarzarPreview(props: Props) {
  const isValidated = props.data.votedNum >= props.data.targetNum;
  return (
    <>
      <Link
        className={`${props.classname} cursor-pointer`}
        href={`/campaigns/${props.data.id}`}
      >
        <Card shadow="none" className="w-full">
          <CardHeader className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <HeroImage
                as={Image}
                src={props.data.imgUrl}
                width={60}
                height={60}
                className="sm:w-[80px] sm:h-[80px]"
                alt={`Karzar-${props.data.id}`}
              />
            </div>
            <p className="text-center sm:text-right mr-0 sm:mr-4 flex-grow font-medium line-clamp-2 text-sm sm:text-base">
              {props.data.title}
            </p>
          </CardHeader>
          <CardBody className="px-3 sm:px-6">
            <div className="flex justify-between my-2 font-thin text-xs">
              <div>تا کنون {props.data.votedNum} نفر امضا کرده اند</div>
              <div>
                {isValidated
                  ? 100
                  : Math.round(
                      (props.data.votedNum / props.data.targetNum) * 100
                    )}
                %
              </div>
            </div>
            <Progress
              value={props.data.votedNum}
              maxValue={props.data.targetNum}
              color={isValidated ? "success" : "primary"}
              size="sm"
            />
          </CardBody>
          <CardFooter className="flex gap-x-1 px-3 sm:px-6">
            <Icon icon="solar:user-hands-bold-duotone" className="text-base sm:text-lg" />
            <p className="line-clamp-1 font-thin text-xs">
              از طرف: {props.data.sender}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}
