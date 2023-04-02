/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "vh-105": "105vh",
        "vh-60": "60vh",
        "vh-75": "75vh",
        "vh-85": "85vh",
        "vh-80": "80vh",
        "vh-70": "70vh",
        "vh-55": "55vh",
        "vh-110": "110vh",
        "vh-120": "120vh",
        "17/20": "85%",
        "9/10": "90%",
      },
      width: {
        "3/10": "30%",
        "9/10":"90%"
      },
     
    },
  },
  plugins: [],
};
