/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        p80: "80px",
        p160: "160px",
        p300: "300px",
        p600: "600px",
        per90: "90%",
      },
      width: {
        w300: "300px",
        w700: "700px",
        w1100: "1100px",
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
    },
  },
  plugins: [],
};
