/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        rammetto: ['Rammetto One', 'cursive'],
        sans: ['Helvetica', 'Open Sans', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },

      boxShadow: {
        lg: '1px 1px 1px 0',
      },

      screens: {
        sm: '350px',
        md: '650px',
        lg: '1100px',
        xl: '1600px',
      },
    },
  },

  plugins: [],
};
