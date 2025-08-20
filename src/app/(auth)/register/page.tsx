"use client";
import RegisterPage, { RegisterFormInputs } from "@/views/auth/RegisterPage";

export default function Register() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (data: RegisterFormInputs) => {
    console.log("form submitted in page.tsx: ", data);
    await sleep(2000);
  };

  return <RegisterPage onSubmit={handleSubmit} />;
}
