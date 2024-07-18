// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#08c0027',
        customRed: '#dd4111',
        customYellow: '#f1a512',
        customLightGreen: '#a1d4b1',
        customTeal: '#2BAF90',
        customDark: '#272727',
        customvino: '#f8ddc1',
        customnegro: '#1E1E1E',
        customnigga: '#000000',
      },
      fontFamily: {
        'leckerli': ['Leckerli One', 'cursive'],
        'lilita': ['Lilita One', 'sans-serif'],
        'lily': ['Lily Script One', 'system-ui'],
      },
    },
  },
  plugins: [],
};
