/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE4300",
        secondary: "#868686",
        softGray: "#F0F0F0",
        mistGray: "#D7DCDD",
        gray: "#C0D8E0",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};

