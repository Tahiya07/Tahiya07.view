/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    "backdrop-blur",
    "backdrop-blur-sm",
    "backdrop-blur-md",
    "backdrop-blur-lg",
    "backdrop-blur-2xl",
    "bg-white/5",
    "bg-white/10",
    "border-white/10",
    "border-white/20",
    "text-white/40"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};