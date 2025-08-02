// hero.ts
import { heroui } from "@heroui/react";
export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#0057A0",
        },
        secondary: {
          DEFAULT: "#F9A825",
        },
        success: {
          DEFAULT: "#81C784",
        },
        background: {
          DEFAULT: "#ECEFF1",
        },
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#64B5F6",
        },
        secondary: {
          DEFAULT: "#F9A825",
        },
        success: {
          DEFAULT: "#81C784",
        },
        background: {
          DEFAULT: "#121212",
        },
      },
    },
  },
});
