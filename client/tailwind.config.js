module.exports = {
  theme: {
    fontFamily: {
      display: ['Crimson Text'],
      body: ['Open Sans']
    },
    extend: {
      screens: {
        xxl: '1600px'
      },
      fontSize: {
        '7xl': '5rem'
      },
      colors: {
        primary: {
          light: '#F4F7FF',
          default: '#5D54A4',
          dark: '#2A3D66'
        },
        accent: {
          light: '#D8C7FF',
          default: '#B99AFF',
          dark: '#5D54A4'
        }
      }
    }
  },
  variants: {
    boxSizing: ['responsive', 'hover', 'focus'],
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
