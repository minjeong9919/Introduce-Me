/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        p80: "80px",
        p160: "160px",
        p500: "500px",
        p800: "800px",
      },
      width: {
        w400: "400px",
        w700: "700px",
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
    },
  },
  plugins: [],
};
