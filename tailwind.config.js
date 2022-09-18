/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        purple: "#7329ac",
        lightpurple: "#9445c2",
        btn: "#ef4b6c",
      },
      height: {
        section: "85vh",
      },
      backgroundColor: {
        purple: "#7329ac",
        lightpuple: "#9445c2",
        btn: "#ef4b6c",
        work: "rgb(248, 248, 248)",
        modelbg: "rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        xl: "6rem",
        h1: "2.5rem",
      },
      fontFamily: {
        title: "'Abril Fatface', cursive",
      },
      boxShadow: {
        main: "inset 2px 4px 5px gray",
        secondary: "inset 2px 2px 2px gray",
      },
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xll: "1308px",
        xl: "1502px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
