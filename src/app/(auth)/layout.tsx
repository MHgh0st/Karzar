"use client";
import { Image as HeroImage } from "@heroui/react";
import Image from "next/image";
import LoginImage from "../../../public/Images/login.jpg";
import RegisterImage from "../../../public/Images/register.jpg";
import CustomNavbar from "../../components/auth/Navbar";

import { usePathname } from "next/navigation";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex flex-col grow min-h-screen lg:min-h-0">
        <CustomNavbar />
        <div className="flex justify-center items-center grow px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="w-full max-w-md sm:max-w-lg">{children}</div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[600px]">
        <HeroImage
          as={Image}
          // @ts-ignore
          src={
            ["/login", "/login/OPT"].includes(pathname)
              ? LoginImage
              : RegisterImage
          }
          className="h-screen"
          radius="none"
        />
      </div>
    </div>
  );
}
