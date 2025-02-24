/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mehandi: {
          light: '#90A959',
          DEFAULT: '#2C5530',
          dark: '#1A331D',
        },
        spice: {
          light: '#FFB067',
          DEFAULT: '#D35400',
          dark: '#A04000',
        },
      },
    },
  },
  plugins: [],
}