/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary-01":
          "linear-gradient(8deg,hsl(244deg 95% 59%) 15.1%,hsl(256deg 89% 67%) 100%)",
      },
      strokeWidth: {
        1.5: "1.5px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      primary: colors.indigo,
      background: colors.zinc,
      foreground: colors.slate,
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
      flat: {
        primary: "hsl(239deg 84% 67% / 15%)",
        background: "hsl(240deg 5% 26% / 40%)",
        success: "hsl(142deg 71% 45% / 15%)",
        warning: "hsl(45deg 93% 47% / 10%)",
        danger: "hsl(0deg 84% 60% / 15%)",
      },
      overlay: "hsl(0deg 0% 0% / 35%)",
      divider: "hsl(207deg 27% 80% / 40%)",
      "divider-dark": "hsl(212deg 7% 35% / 40%)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
