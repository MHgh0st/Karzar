"use client";
import { Skeleton, Card } from "@heroui/react";

export default function SkeletonPreview(props: { classname?: string }) {
  return (
    <>
      <Card
        className={`${props.classname} w-full flex flex-col space-y-4 p-2`}
        shadow="none"
      >
        <div className="flex gap-x-4 h-24">
          <Skeleton className="rounded-xl">
            <div className="w-24 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="rounded-xl grow">
            <div className="rounded-lg bg-default-300" />
          </Skeleton>
        </div>
        <div className="w-full flex justify-between h-3 mt-2">
          <Skeleton className="rounded-xl">
            <div className="w-30 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="w-10 rounded-xl">
            <div className="rounded-lg bg-default-300" />
          </Skeleton>
        </div>
        <Skeleton className="w-full h-3 rounded-xl -mt-2">
          <div className="rounded-lg bg-default-300" />
        </Skeleton>
        <div className="w-full ">
          <Skeleton className="w-56 h-3 rounded-xl">
            <div className="rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </Card>
    </>
  );
}
