import { z } from "zod";

export const LoginSchema = z.object({
  PhoneNumber: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید ۱۱ رقم و با 09 شروع شود"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});
