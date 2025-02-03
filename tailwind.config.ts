import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E6FF7",
        "primary-20": "#4758E0",
        grey: "#85A8C8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
