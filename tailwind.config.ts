import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",      // Next.js app directory
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], // Montserrat loaded via next/font
      },
      colors: {
        primary: "oklch(0.6 0.15 250)",   // Replace with your preferred OKLCH values
        secondary: "oklch(0.75 0.12 40)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
