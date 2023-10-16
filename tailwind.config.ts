import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-gray": "#8892b0",
        periwinkle: "#D0DDFF",
        bgPurple: "#0a192f;",
      },
      dropShadow: {
        glow: [
          "0 0px 45px rgba(255, 255, 255, 0.60)",
          "0 0px 130px rgba(255, 255, 255, 0.34)",
        ],
        glowLight: [
          "0 0px 45px rgba(255, 255, 255, 0.35)",
          "0 0px 130px rgba(255, 255, 255, 0.20)",
        ],
      },
      spacing: {
        130: "40rem",
        90: "22.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
