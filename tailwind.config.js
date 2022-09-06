/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cabanaBlue: '#007CC2',
        porcelain: '#EFF1F2',
        corduroy: '#585959',
      },
      backgroundImage: {
        hero: "url('/images/hero_bg.png')",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1rem' }],
        sm: ['1.4rem', { lineHeight: '1.25rem' }],
        base: ['1.6rem', { lineHeight: '1.5rem' }],
        lg: ['1.8rem', { lineHeight: '2.4rem' }],
        xl: ['2.4rem', { lineHeight: '3.6rem' }],
        '2xl': ['4.8rem', { lineHeight: '6rem' }],
        '3xl': ['6rem', { lineHeight: '6.4rem' }],
      },
      dropShadow: {
        regular: '0px 8px 16px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
