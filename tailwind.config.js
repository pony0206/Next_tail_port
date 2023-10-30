module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '768px',
      // => @media (min-width: 576px) { ... }

      md: '992px',
      // => @media (min-width: 960px) { ... }

      lg: '1200px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
