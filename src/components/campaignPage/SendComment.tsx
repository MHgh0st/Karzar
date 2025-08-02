"use client";
import Editor from "./Editor";
import { Avatar, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function SendComment({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col sm:flex-row gap-3 sm:gap-x-2 items-start`}>
      <Avatar src="/Images/profiles/1.jpg" radius="md" className="flex-shrink-0" />
      <Editor className="focus:outline-none p-2 bg-zinc-300 dark:bg-zinc-800 rounded-xl grow" />
      <Tooltip content="ثبت نظر" showArrow>
        <Button color="primary" variant="flat" isIconOnly size="sm" className="self-end sm:self-auto">
          <Icon icon="mynaui:send-solid" className="text-lg sm:text-xl" />
        </Button>
      </Tooltip>
    </div>
  );
}
