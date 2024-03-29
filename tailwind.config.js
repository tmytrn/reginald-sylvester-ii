/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./admin/schemas/*.{js}",
  ],
  theme: {
    fontFamily: {
      sans: ["Gotham", "sans-serif"],
    },
    fontSize: {
      xs: ["10px", "16px"],
      sm: ["14px", "16px"],
    },
    extend: {
      margin: {
        center: "0 auto",
      },
      flex: {
        custom1: "1 0 auto",
      },
      colors: {
        "reginald-gray": "#e2e6ef",
        "regi-red": "#540d08",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "2 / 3",
      },
      width: {
        "half-spaced": "calc(50% - 0.5rem)",
        fifteen: "15%",
      },
    },
  },
  plugins: [],
};
