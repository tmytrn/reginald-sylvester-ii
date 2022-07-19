/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Gotham", "sans-serif"],
    },
    extend: {
      colors: {
        "reginald-gray": "#e2e6ef",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "2 / 3",
      },
      width: {
        "half-spaced": "calc(50% - 0.5rem)",
      },
    },
  },
  plugins: [],
};
