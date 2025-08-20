"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/react";

import { Icon } from "@iconify/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import { useState } from "react";

import { useAuthStore } from "@/store/useAuthStore";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      <Navbar
        maxWidth="full"
        className="items-center text-lg"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="grow-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="grow-0">
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-x-4 md:gap-x-8 grow"
          justify="center"
        >
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-primary text-base md:text-lg"
                  variant="light"
                  size="sm"
                  endContent={
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-lg md:text-xl"
                    />
                  }
                >
                  کارزار ها
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Campaigns"
              className="text-primary"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="all"
                startContent={
                  <Icon icon="solar:file-bold-duotone" className="text-lg" />
                }
              >
                همه کارزار ها
              </DropdownItem>
              <DropdownItem
                key="most signed"
                startContent={
                  <Icon
                    icon="solar:file-check-bold-duotone"
                    className="text-lg"
                  />
                }
              >
                پر امضا ترین کارزار ها
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link href="#" className="text-base md:text-lg">
              درباره کارزار
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="gap-x-2" justify="end">
          <NavbarItem className="hidden sm:block">
            <ThemeToggle />
          </NavbarItem>
          <Link href="/campaigns/create">
            <NavbarItem>
              <Button
                color="primary"
                variant="flat"
                className="hidden md:flex"
                startContent={
                  <Icon
                    icon="solar:add-square-bold-duotone"
                    className="text-lg md:text-xl"
                  />
                }
              >
                ایجاد کارزار
              </Button>
            </NavbarItem>
          </Link>
          {isAuthenticated ? (
            <UserDropdown />
          ) : (
            <Link href="/login">
              <NavbarItem>
                <Button
                  color="primary"
                  startContent={
                    <Icon
                      icon="solar:user-bold-duotone"
                      className="text-lg md:text-xl"
                    />
                  }
                >
                  <span className="hidden md:inline">ورود / ثبت نام</span>
                  <span className="md:hidden">ورود / ثبت نام</span>
                </Button>
              </NavbarItem>
            </Link>
          )}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="sm:hidden">
          <NavbarMenuItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-primary text-lg w-full justify-start"
                  variant="light"
                  endContent={
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  }
                >
                  کارزار ها
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Campaigns"
                className="text-primary"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="all"
                  startContent={
                    <Icon icon="solar:file-bold-duotone" className="text-lg" />
                  }
                >
                  همه کارزار ها
                </DropdownItem>
                <DropdownItem
                  key="most signed"
                  startContent={
                    <Icon
                      icon="solar:file-check-bold-duotone"
                      className="text-lg"
                    />
                  }
                >
                  پر امضا ترین کارزار ها
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link href="#" className="text-lg w-full block py-2">
              درباره کارزار
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <div className="flex items-center gap-2 py-2">
              <span className="text-lg">تم:</span>
              <ThemeToggle />
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
