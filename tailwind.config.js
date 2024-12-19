/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "2rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
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
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
      primary: {
        50: "#E8F4FE",
        100: "#BBDEFC",
        200: "#8EC8FA",
        300: "#61B1F8",
        400: "#349BF6",
        500: "#1D90F5",
        600: "#1A82DD",
        700: "#1465AC",
        800: "#0F487B",
        900: "#092B49",
        950: "#061D31",
      },
      background: {
        50: "#AAADB4",
        100: "#999DA5",
        200: "#888C96",
        300: "#777C87",
        400: "#666B78",
        500: "#555B69",
        600: "#4D525F",
        700: "#444954",
        800: "#3D404B",
        900: "#323644",
        950: "#272A37",
      },
      foreground: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        950: "#030712",
      },
      flat: {
        primary: "hsl(208deg 92% 54% / 15%)",
        success: "hsl(142deg 71% 45% / 15%)",
        warning: "hsl(45deg 93% 47% / 10%)",
        danger: "hsl(0deg 84% 60% / 15%)",
      },
      overlay: "hsl(0deg 0% 0% / 35%)",
      divider: "#3B3E4A",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
