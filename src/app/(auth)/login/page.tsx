"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, Input, Button, Link, InputOtp } from "@heroui/react";
import { Icon } from "@iconify/react";
import { LoginSchema } from "@/app/(auth)/Schemas";
import { useState, useEffect } from "react";

type LoginFormInputs = z.infer<typeof LoginSchema>;
enum Steps {
  LoginForm,
  OTP,
}

const RESEND_TIMER = 10;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Step, setStep] = useState<Steps>(Steps.LoginForm);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [OTP, setOTP] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(RESEND_TIMER);
  const [canResend, setCanResend] = useState(false);
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const submitForm = async (data: LoginFormInputs | string) => {
    if (Step === Steps.LoginForm) {
      setIsLoading(true);
      const FormData = data as LoginFormInputs;
      console.log("data: ", data);
      await sleep(2000);
      setStep(Steps.OTP);
      setIsLoading(false);
    } else if (Step === Steps.OTP) {
      setIsLoading(true);
      const OTPData = data as string;
      await sleep(2000);
      setIsLoading(false);
    }
  };
  const resetTimer = () => {
    setTimeLeft(RESEND_TIMER);
    setCanResend(false);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (Step !== Steps.OTP) return;
    resetTimer();
  }, [Step]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          خوش اومدی!
        </p>
        <p className="font-light text-center text-sm sm:text-base px-4">
          {Step === Steps.LoginForm ? (
            "با وارد کردن شماره موبایل و پسوردت سفرت رو ادامه بده :)"
          ) : (
            <p>
              کدی که به شماره موبایل{" "}
              <span className="font-bold">{phoneNumber}</span> فرستاده شده را
              وارد کن.
            </p>
          )}
        </p>
        {Step === Steps.LoginForm ? (
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
              value={phoneNumber}
              onValueChange={setPhoneNumber}
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
        ) : (
          <Form
            className="w-full mt-2 space-y-4 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm(OTP);
            }}
          >
            <InputOtp
              length={4}
              dir="ltr"
              size="lg"
              isRequired
              errorMessage={"فیلد کد نمیتواند خالی باشد"}
              value={OTP}
              onValueChange={setOTP}
            />

            {!canResend ? (
              <p className="text-center text-sm text-gray-500">
                ارسال مجدد کد تا {timeLeft} ثانیه دیگر
              </p>
            ) : (
              <Link
                className="text-primary text-sm font-light cursor-pointer"
                onPress={resetTimer}
              >
                ارسال مجدد کد
              </Link>
            )}
            <Button
              fullWidth
              color="primary"
              type="submit"
              isLoading={isLoading}
            >
              تایید کد
            </Button>
          </Form>
        )}
      </div>
    </>
  );
}
