/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thumb-gray-400': {
          'scrollbar-color': '#dfe5fa transparent',
          '&::-webkit-scrollbar-thumb': {
            'background-color': '#dfe5fa',
            'border-radius': '50px',
          },
        },
        '.scrollbar-track-gray-200': {
          'scrollbar-color': 'transparent #f1f1f1',
          '&::-webkit-scrollbar-track': {
            'background-color': '#f1f1f1',
            'border-radius': '8px',
          },
        },
        '.scrollbar-thumb-hover': {
          '&::-webkit-scrollbar-thumb:hover': {
            'background-color': '#e8e7e7',
          },
        },
      }, ['responsive', 'hover']);
    }
  ],
}

