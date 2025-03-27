/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#123C69",
          green: "#81985a",
          text: "#AC3B61",
        },
        background: {
          DEFAULT: "#EDC7B7",
          secondary: "#EEE2DC",
          muted: "#BAB2B5",
        },
        text: {
          DEFAULT: "#000000",
          light: "#BAB2B5",
        },
      },
    },
  },
  plugins: [],
};
