/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "dark-green": "#5ECC76",
        "white": "#FFF",
        "black": "#0E0E0E",
        "green": "#68FF89"

      },
      screens: {
        'tall': { 'raw': '(min-height: 70vh)' },
      },
      container: {
        center:true,        
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          xl: "0rem"
        }
      }
    },
  },
  plugins: [],
}