"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, Input, Button, Checkbox, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { RegisterSchema } from "@/app/(auth)/Schemas";
import { useState } from "react";

export type RegisterFormInputs = z.infer<typeof RegisterSchema>;

export interface RegisterPageProps {
  onSubmit: (data: RegisterFormInputs) => void;
  classname?: string;
}

export default function RegisterPage({
  onSubmit,
  classname,
}: RegisterPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterSchema),
  });

  const submitForm = async (data: RegisterFormInputs) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <div className={classname}>
      <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4 w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          ثبت نام
        </p>
        <p className="font-light text-center text-sm sm:text-base px-4">
          با وارد کردن ایمیل و پسوردت، حساب کاربری جدید بساز :)
        </p>
        <Form
          className="w-full mt-2 space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            label="نام و نام خانوادگی"
            type="text"
            placeholder="نام خود را وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon
                icon="solar:text-square-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
            {...register("fullName")}
            isInvalid={!!errors.fullName}
            errorMessage={errors.fullName?.message}
          />
          <Input
            label="ایمیل"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            fullWidth
            size="lg"
            startContent={
              <Icon
                icon="solar:letter-bold-duotone"
                className="text-lg sm:text-xl"
              />
            }
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
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
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
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
            {...register("confirmPassword")}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
          <Checkbox className="mt-2" color="primary" isRequired size="lg">
            <span className="text-sm sm:text-base">
              با قوانین و مقررات سایت موافقم
            </span>
          </Checkbox>
          <Button
            fullWidth
            color="primary"
            type="submit"
            className="mt-4"
            size="lg"
            isLoading={isLoading}
          >
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
    </div>
  );
}
