/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cabanaBlue: "#007CC2",
        cabanaBlue2: "#00649C",
        cabanaBlue3: "#3397CF",
        cabanaRazz: "#b22479",
        corduroy: "#585959",
        porcelain: "#EFF1F2",
        swamp: "#001927",
        second600: "#089B82",
      },
      backgroundImage: {
        hero: "url('/images/hero_bg.png')",
        banner: "linear-gradient(90deg, #007CC2 0%, #B22479 100%)",
        partnerships: "linear-gradient(90deg, #00649C 0%, #089B82 100%);",
      },

      fontFamily: {
        satoshi: ["Inter", "sans-serif"],
      },

      fontSize: {
        xs: ["1.2rem", { lineHeight: "1.6rem" }],
        sm: ["1.4rem", { lineHeight: "2rem" }],
        base: ["1.6rem", { lineHeight: "2.4rem" }],
        lg: ["1.8rem", { lineHeight: "2.4rem" }],
        lg2: ["1.9rem", { lineHeight: "2.9rem" }],
        xl: ["2.4rem", { lineHeight: "3.6rem" }],
        xxl: ["3rem", { lineHeight: "4.2rem" }],
        "2xl": ["3.6rem", { lineHeight: "4.4rem" }],
        "3xl": ["4.8rem", { lineHeight: "6rem" }],
        "4xl": ["6rem", { lineHeight: "7.2rem" }],
        "5xl": ["8rem", { lineHeight: "8.8rem" }],
      },
      dropShadow: {
        glow: "12px 12px 160px rgba(255, 255, 255, 0.85)",
        regular: "0px 8px 16px rgba(0, 0, 0, 0.24)",
        small: "0px 0px 4px rgba(0, 0, 0, 0.12)",
      },
      boxShadow: {
        regular: "0px 4px 8px rgba(0, 0, 0, 0.16)",
      },
      maxWidth: {
        section: "1650px",
        banner: "1140px",
        content: "1650px",
      },
      letterSpacing: {
        2: "0.125rem",
        4: "0.35rem",
      },
    },
  },
  plugins: [],
};
