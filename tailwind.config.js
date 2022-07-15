/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "reginald-gray": "#e2e6ef",
    },
    fontFamily: {
      sans: ["Gotham", "sans-serif"],
    },
  },
  plugins: [],
};
