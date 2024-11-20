import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray_support": "var(--gray_support)",
        "black-principal": "var(--black-principal)",
        "green-support": "var(--green-support)",
        "gray-light": "var(--gray-light)",
        "white-principal": "var(--white-principal)",
      },
      fontFamily: {
        'deutschlander': ['DeutschlanderFont', ...fontFamily.sans],

      },
    },
  },
  plugins: [],
};
export default config;
