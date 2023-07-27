/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{pages,src}/**/*.{js,ts,jsx,tsx}'],
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
          accent: '#004e92', //ocean blue to make frost gradient
          feel: '#4568dc',
          love: '#b06ab3',
          info: '#9aaaf4',
          dusk: '#ffd89b',
          dusk2: '#19547b',
          success: '#31c489',
          warning: '#b87b0a',
          error: '#ed5a66',
        },
      },
    ],
  },
};
