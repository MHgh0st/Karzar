"use client";
import LoginPage, { LoginFormInputs } from "@/views/auth/LoginPage";

export default function Login() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (data: LoginFormInputs | string) => {
    console.log("form submitted in page.tsx: ", data);
    await sleep(2000);
  };

  return <LoginPage onSubmit={handleSubmit} />;
}
