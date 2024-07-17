import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        black: {
          100: 'var(--color-black-100)',
          300: 'var(--color-black-300)',
          600: 'var(--color-black-600)',
        },
        primary: 'var(--color-primary)',
        secondary: {
          300: 'var(--color-secondary-300)',
          600: 'var(--color-secondary-600)',
        },
      },
      boxShadow: {
        'custom-down': '0 2px 3px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
