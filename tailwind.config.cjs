/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "vh-75": "75vh",
        "vh-85": "85vh",
        "vh-70": "70vh",
        "vh-55": "55vh",
      },
    },
  },
  plugins: [],
};
