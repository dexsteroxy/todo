/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "900px",
      mdl: "700px",
      xl: "1330px",
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73 81, 0.06)',

      },
      backgroundImage: {
        services: 'url(../src/asset/accent2.png)',
        testimonails: 'url(../src/asset/accent.jpg)',
        departments: 'url(../src/asset/man.jpg)',
        quoteLeft: 'url(../src/asset/clapping.gif)',
        quoteRight: 'url(../src/asset/clapping.gif)',
      }
    },
  },
  plugins: [],
};
