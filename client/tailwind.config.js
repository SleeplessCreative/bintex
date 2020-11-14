module.exports = {
  theme: {
    fontFamily: {
      display: ['Crimson Text'],
      body: ['Open Sans']
    },
    extend: {
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
        },
        fontSize: {
          '7xl': '5rem',
        }
      }
    }
  },
  variants: {
    boxSizing: ['responsive', 'hover', 'focus'],
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: []
};
