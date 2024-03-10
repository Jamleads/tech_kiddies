/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#ffffff",
        darkerBlue: "#162664",
        lightYellow: "#F8EEE8",
        baseOrange: "#F17B2C",
      },
      fontFamily: {
        // main: ["Aclonica", "sans-serif"],
        // sub: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
