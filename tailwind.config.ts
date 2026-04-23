import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF3D6",
        amber: "#F5A623",
        amber2: "#C9922A",
        dark: "#1C1208",
        brown: "#3D2B1F",
        muted: "#6B5E52",
        stone: "#9A8F86",
        card: "#FFFDF5",
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
        serif: ["'Fraunces'", "serif"],
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        floatY: "floatY 5s ease-in-out infinite",
      },
      boxShadow: {
        nav: "0 1px 0 rgba(245,166,35,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
