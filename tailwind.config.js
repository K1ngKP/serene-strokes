// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#223F6D', // Main background color
        secondary: '#FFFFFF', // Main text color
        accent: '#5DBCD2', // Accent color for labels
        highlight: '#4D6A94', // Highlighted text color
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
