"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
export default function CustomNavbar() {
  return (
    <>
      <Navbar maxWidth="full" className="px-4 sm:px-6 lg:px-8">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
