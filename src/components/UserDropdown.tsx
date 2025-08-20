"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  Button,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export default function UserDropdown() {
  return (
    <>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <Button
            isIconOnly
            className="flex items-center gap-x-3 data-[hover=true]:bg-transparent"
            variant="light"
            disableRipple
          >
            <Avatar
              name="User Name"
              src="/Images/profiles/1.jpg"
              radius="md"
              size="md"
            />
            {/* <div className="flex flex-col text-right hidden sm:flex">
              <p className="text-sm font-medium">محمد حسین غلامی</p>
              <p className="text-xs font-light opacity-60">دانشجو</p>
            </div> */}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          color="primary"
          aria-label="User_Dropdown"
          itemClasses={{
            base: "gap-2",
          }}
        >
          <DropdownSection showDivider>
            <DropdownItem
              key="Profile"
              href="/profile"
              startContent={
                <Icon icon="solar:user-bold-duotone" className="text-xl" />
              }
            >
              پروفایل کاربری
            </DropdownItem>
            <DropdownItem
              key="settings"
              startContent={
                <Icon icon="solar:settings-bold-duotone" className="text-xl" />
              }
            >
              تنظیمات پروفایل
            </DropdownItem>
          </DropdownSection>

          <DropdownItem
            key="logout"
            color="danger"
            startContent={
              <Icon icon="solar:logout-2-bold-duotone" className="text-xl" />
            }
          >
            خروج از حساب کاربری
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
