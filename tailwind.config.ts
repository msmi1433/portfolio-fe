import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-gray": "#cccccc",
      },
      dropShadow: {
        glow: [
          "0 0px 45px rgba(255, 255, 255, 0.60)",
          "0 0px 130px rgba(255, 255, 255, 0.34)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
