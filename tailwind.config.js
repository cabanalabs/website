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
        cabanaBlue2: '#00649C',
        corduroy: '#585959',
        porcelain: '#EFF1F2',
        swamp: '#001927',
      },
      backgroundImage: {
        hero: "url('/images/hero_bg.png')",
        banner: 'linear-gradient(90deg, #007CC2 0%, #B22479 100%)',
        partnerships: 'linear-gradient(90deg, #00649C 0%, #089B82 100%);',
      },

      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1.6rem' }],
        sm: ['1.4rem', { lineHeight: '2rem' }],
        base: ['1.6rem', { lineHeight: '2.4rem' }],
        lg: ['1.8rem', { lineHeight: '2.4rem' }],
        xl: ['2.4rem', { lineHeight: '3.6rem' }],
        xxl: ['3rem', { lineHeight: '4.2rem' }],
        '2xl': ['3.6rem', { lineHeight: '4.4rem' }],
        '3xl': ['4.8rem', { lineHeight: '6rem' }],
        '4xl': ['6rem', { lineHeight: '7.2rem' }],
      },
      dropShadow: {
        regular: '0px 8px 16px rgba(0, 0, 0, 0.24)',
      },
      boxShadow: {
        regular: '0px 4px 8px rgba(0, 0, 0, 0.16)',
      },
      maxWidth: {
        section: '1200px',
        banner: '1140px',
        content: '866px',
      },
    },
  },
  plugins: [],
};
