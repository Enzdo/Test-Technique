/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {
          heigth:{
            '20': '20vh',
          }
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }