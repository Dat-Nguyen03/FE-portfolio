/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
