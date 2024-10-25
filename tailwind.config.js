/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whitee':{
          100: '#f0f4f9',
          200: '#e6eaf1',
          300: '#282828',
          400: '#e2e6eb',
          500: '#585858',
          600: '#c4c7c5',
          700: '#f0f4f9',
          }
      }
    },
   
  },
  plugins: [],
}

