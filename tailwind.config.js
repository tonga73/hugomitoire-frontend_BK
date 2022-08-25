/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Cinzel: ["Cinzel", "serif"],
      Reggae: ['"Reggae One"', "cursive"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
};
