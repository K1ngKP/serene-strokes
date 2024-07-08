// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'purple-dark': '#802BB1',
        'blue-dark': '#2D283E',
        'purple-light': '#564F6F',
        'purple-muted': '#4C495D',
        'gray-light': '#D1D7E0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

