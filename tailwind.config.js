/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#000000',
        'second-color': '#858598',
        'error-color': '#FF4965',
        'accent-color': '#FFBC33',
        'second-accent-color': '#FFE9A5',
        'main-bgcolor': '#FFFFFF',
        'second-bgcolor': '#F1F1F1',
      },
      boxShadow: {
        base: '0 0 5px rgb(0, 0, 0, 0.8)',
        hover: '0 0 10px 2px rgb(0, 0, 0, 0.8)',
        bottom: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        sMob: '480px',
        sTablet: '768px',
        sLaptop: '1280px',
        lessMob: { max: '480px' },
        lessTablet: { max: '767px' },
        lessLaptop: { max: '1267px' },
        onlyTablet: { min: '768px', max: '1279px' },
      },
    },
  },
  plugins: [],
};
