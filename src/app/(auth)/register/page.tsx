"use client";
import { Form, Input, Button, Checkbox, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">ثبت نام</p>
        <p className="font-light text-center text-sm sm:text-base px-4">
          با وارد کردن ایمیل و پسوردت، حساب کاربری جدید بساز :)
        </p>
        <Form
          className="w-full mt-2 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            label="نام و نام خانوادگی"
            type="text"
            placeholder="نام خود را وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon icon="solar:text-square-bold-duotone" className="text-lg sm:text-xl" />
            }
          />
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
          <Input
            label="تکرار رمز عبور"
            type="password"
            placeholder="رمز عبور خود را دوباره وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon
                icon="solar:lock-password-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
          />
          <Checkbox className="mt-2" color="primary" isRequired size="lg">
            <span className="text-sm sm:text-base">با قوانین و مقررات سایت موافقم</span>
          </Checkbox>
          <Button fullWidth color="primary" type="submit" className="mt-4" size="lg">
            ثبت نام
          </Button>
          <p className="mx-auto mt-4 text-sm font-light text-center">
            قبلا ثبت نام کردی؟{" "}
            <Link href="/login" className="mx-1">
              ورود
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
}
