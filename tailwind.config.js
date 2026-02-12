/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      sm: "369px",

      md: "429px",

      lg: "819px",

      xl: "1220px",

      "2xl": "1320px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans","sans-serif"],
      },
    },
    
  },
  plugins: [require("flowbite/plugin")],
};
