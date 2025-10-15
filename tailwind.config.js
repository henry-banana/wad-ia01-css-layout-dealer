/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*{.html, .js}"],
  theme: {
    extend: {
      fontFamily: {
        'yellowtail': ['Yellowtail', 'cursive'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      colors: {
        'brand-bg': '#E7EEF0',
        'brand-surface': '#FFFFFF',
        'brand-text-light': '#6B6B6B',
        'brand-text-dark': '#444444',
        'brand-green': '#51CE3E',
        'brand-green-dark': '#48B737',
        'brand-subscribe-light': '#ACB4BF',
        'brand-subscribe-dark': '#979EAC',
      },
    },
  },
  plugins: [],
}