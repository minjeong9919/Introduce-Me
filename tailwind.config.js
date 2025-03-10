/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        h80: "80px",
        h160: "160px",
        h400: "400px",
        h600: "600px",
        h700: "700px",
        h800: "800px",
        h900: "900px",
        h1000: "1000px",
      },
      width: {
        w400: "400px",
        w600: "600px",
        w700: "700px",
        w800: "800px",
        w900: "900px",
        w1000: "1000px",
        w1360: "1360px",
      },
      borderRadius: {
        "100px": "100px",
      },
      margin: {
        l: "10%",
        xl: "15%",
      },
      padding: {
        p: "10%",
        p2: "20%",
        p6: "60%",
      },
      colors: {
        gray100: "#DEDEDE",
        gray400: "#2C2C2C",
        primary: "#E2009E",
      },
    },
  },
  plugins: [],
};
