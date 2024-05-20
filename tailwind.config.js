/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DCBB1",
      },
      screens: {
        xs: "50px",
      },
    },
  },
  plugins: [],
};
