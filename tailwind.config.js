/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        orange: {
          50: "#fff7f0",
          100: "#feecd8",
          500: "#f97316", // LINEボタンなどで使用
        },
        gray: {
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
}