"use client";
import { Form, Input, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">خوش اومدی!</p>
        <p className="font-light text-center text-sm sm:text-base px-4">
          با وارد کردن ایمیل و پسوردت سفرت رو ادامه بده :)
        </p>
        <Form
          className="w-full mt-2 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            label="ایمیل"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon icon="solar:letter-bold-duotone" className="text-lg sm:text-xl" />
            }
          />
          <Input
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon
                icon="solar:lock-password-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
          />
          <Button fullWidth color="primary" type="submit" className="mt-4" size="lg">
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
