/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff",
      },
    },
  },
  plugins: [],
};
