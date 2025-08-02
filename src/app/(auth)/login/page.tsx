"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, z } from "zod";
import { Form, Input, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { LoginSchema } from "@/app/(auth)/Schemas";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginFormInputs = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  // ۲. یک state برای نگهداری خطاهای سمت سرور
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const submitForm = async (data: LoginFormInputs) => {
    setIsLoading(true);
    console.log("data: ", data);
    await sleep(2000);
    const otpToken = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("otp_token", otpToken);
    setIsLoading(false);
    router.push(`/login/OPT?token=${otpToken}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          خوش اومدی!
        </p>
        <p className="font-light text-center text-sm sm:text-base px-4">
          با وارد کردن شماره موبایل و پسوردت سفرت رو ادامه بده :)
        </p>
        <Form
          className="w-full mt-2 space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            label="تلفن همراه"
            type="tel"
            placeholder="09121234567"
            fullWidth
            startContent={
              <Icon icon="solar:phone-bold-duotone" className="text-xl " />
            }
            {...register("PhoneNumber")}
            isInvalid={!!errors.PhoneNumber}
            errorMessage={errors.PhoneNumber?.message}
          />
          <Input
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            fullWidth
            startContent={
              <Icon
                icon="solar:lock-password-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />

          {/* ۴. نمایش خطای دریافت شده از سرور */}
          {serverError && (
            <p className="text-sm text-red-500 text-center">{serverError}</p>
          )}

          <Button
            fullWidth
            color="primary"
            type="submit"
            className="mt-4"
            // isLoading={isSubmitting}
            isLoading={isLoading}
          >
            ورود
          </Button>
          <p className="mx-auto mt-4 text-sm font-light text-center">
            حساب کاربری نداری؟{" "}
            <Link href="/register" className="mx-1">
              ثبت نام
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
}
