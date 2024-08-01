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
        primary: "#fef663",
        secondary: "#3d3d3d",
        secondaryLight: "#4b4b4b",
      },
      colors: {
        primary: "#fef663",
        secondary: "#3d3d3d",
        secondaryLight: "#4b4b4b",
      },
    },
  },
  plugins: [],
};
export default config;
