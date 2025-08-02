"use client";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <>
      <Button
        isIconOnly
        color="primary"
        variant="flat"
        onPress={() => {
          changeTheme();
        }}
      >
        <Icon
          icon={`${
            theme === "light"
              ? "solar:sun-bold-duotone"
              : "solar:moon-bold-duotone"
          }`}
          fontSize={24}
        />
      </Button>
    </>
  );
}
