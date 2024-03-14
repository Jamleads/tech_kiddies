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
        thePink: "#F0315C",
        theGreen: "#00A541",
        theYellow: "#FFD150",
      },
    },
  },
  plugins: [],
};
