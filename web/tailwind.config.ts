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
        secondary: "#001B7B",
        secondaryLight: "#2A20B4",
      },
      colors: {
        primary: "#fef663",
        secondary: "#001B7B",
        secondaryLight: "#2A20B4",
      },
    },
  },
  plugins: [],
};
export default config;
