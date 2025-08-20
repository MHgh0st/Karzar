import { z } from "zod";

export const LoginSchema = z.object({
  PhoneNumber: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید ۱۱ رقم و با 09 شروع شود"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const RegisterSchema = z
  .object({
    fullName: z.string().min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد"),
    email: z.email("ایمیل معتبر نیست"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"],
  });
