const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        }
    },
    fontFamily: {
      sans: [
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      screens : {
        'md2': '950px',
        'xs': '420px'
      },
      gridTemplateColumns: {
       'channel': 'auto 330px'
      },
      colors: {
        'intoprofits-blue': {
          DEFAULT: '#0047ab',
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
