/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1440px',
    },
    extend: {
      container: {
        padding: '16px',
      },
      colors: {
        violet: {
          light: '#dedddf',
          dark: '	#8e8593',
          verydark: '	#21092f',
        },
      }
    },
  },
  plugins: [],
}
