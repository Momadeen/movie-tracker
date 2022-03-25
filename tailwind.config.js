module.exports = {
  darkMode: 'media',
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      kanit: ['Kanit', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        bg: '#0F171B',
        primary: '#00EBD1',
        secondary: '#008c7d',
        white: '#fff',
        gray: {
          100: '#0C0C0C'
        },
        text: {
          100: 'white',
          200: '#6e6e6e'
        },
        border: {
          100: '#5e5e5e'
        }
      }
    }
  },

  plugins: []
};
