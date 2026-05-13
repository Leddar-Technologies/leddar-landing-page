/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#361B14',
          gold: '#FBB13A',
          cream: '#FFF7E9',
          peach: '#FFE4D4',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
};
