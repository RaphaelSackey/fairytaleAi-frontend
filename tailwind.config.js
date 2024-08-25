/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBackground: "#000",
        componentBackground: "#0A0A0A",
        componentBorder: "#2E2E2E",
      },
    },
  },
  plugins: [],
};

