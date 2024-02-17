/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{pages,src}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        akkurat: ['AkkuratPro', 'regular']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F5F5F5', //white
          secondary: '#000428 ', //dark blue
        },
      },
    ],
  },
};
