/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      bodoni: ['"Libre Bodoni"', "serif"],
    },
    extend: {
      colors: {
        perla: "#F0F0F0",
        beige: "#fdf5e6",
        coronado: "#f3f2d8",
        royalGreen: "#285856",
        beigeStrong: "#FFEECC",
        beige2: "#FFCDA8",
        beigeLight: "#FFFBEB",
        royalPink: "#ff6568",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
