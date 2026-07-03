/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fbfaf8',
          dark: '#1c1c1c',
          text: '#222222',
          textLight: '#555555',
          yellow: '#fdf1c2',
          green: '#d1f4d9',
          red: '#fcd3d3',
          orange: '#fde3c2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
