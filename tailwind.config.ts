import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "blue",
      },
      animation: {
        "fade-up": "fade-up .3s ease-out forwards",
        "fade-down": "fade-down .3s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { transform: "translateY(4%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { transform: "translateY(-4%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
