/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {
          heigth:{
            '20': '20vh',
          },
          backgroundColor: {
            'type': 'rgba(34, 211, 238, 0.2);',
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }