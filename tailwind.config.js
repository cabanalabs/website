/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        athensGray: "#F4F5F7",
        linkWater: "#CCE5F3",
        lochmara: "#007CC2",
        watercourse: "#067461",
        prussianBlue: "#00324E",
        grayChateau: "#A4A5A6",
        corduroy: "#585959",
        mineshaft: "#3D3D3D",
        woodSmoke: "#16171A",
        codGray: "#0B0B0B",
        swamp: "#001927",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }], //12px/18px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], //14px/20px
        base: ["1rem", { lineHeight: "1.5rem" }], //16px/24px
        lg: ["1.125rem", { lineHeight: "1.5rem" }], //18px/24px
        xl: ["1.5rem", { lineHeight: "1.875rem" }], //24px/30px
        "2xl": ["3rem", { lineHeight: "3rem" }], //48px/48px
        "3xl": ["4.5rem", { lineHeight: "4.5rem" }], //72px/72px
        "4xl": ["6rem", { lineHeight: "6.563rem" }], //96px/105px
        "5xl": ["9.125rem", { lineHeight: "8.375rem" }], //146px/134px
      },
      boxShadow: {
        regular: "0px 5.13119px 10.26238px 0px rgba(0, 0, 0, 0.16)",
      },
      maxWidth: {
        small: "486px",
        medium: "768px",
        large: "1024px",
        xl: "1280px",
        xxl: "1456px",
        "3xl": "1728px",
      },
      letterSpacing: {
        2: "0.125rem",
        4: "0.35rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
