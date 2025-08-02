"use client";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OPT() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === true) {
      return;
    }

    const tokenFromUrl = searchParams.get("token");
    const tokenFromStorage = sessionStorage.getItem("otp_token");

    console.log("Token check running...");
    console.log("tokenFromUrl: ", tokenFromUrl);
    console.log("tokenFromStorage: ", tokenFromStorage);

    if (
      !tokenFromUrl ||
      !tokenFromStorage ||
      tokenFromUrl !== tokenFromStorage
    ) {
      router.replace("/login");
    } else {
      sessionStorage.removeItem("otp_token");
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p>صفحه تایید کد</p>
      </div>
    </>
  );
}
