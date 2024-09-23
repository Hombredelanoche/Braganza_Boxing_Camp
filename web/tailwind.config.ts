import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0D0D0D",
        primaryLight: "#403838",
        secondary: "#ff3838",
        secondaryLight: "#ff4d4d",
        warning: "#ff9f1a",
      },
      colors: {
        primary: "#3d3d3d",
        primaryLight: "#4b4b4b",
        secondary: "#ff3838",
        secondaryLight: "#ff4d4d",
        warning: "#ff9f1a",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
