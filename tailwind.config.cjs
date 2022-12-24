/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#141416",
        secondaryNeon: "#CAFB42",
        thirdWhite: "#FBFBFB",
      },
      fontFamily: {
        "Syne": ["Syne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),],
}
