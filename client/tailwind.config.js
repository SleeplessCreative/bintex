module.exports = {
  theme: {
    fontFamily: {
      'serif': ['Yeseva One'],
      'sans': ['Josefin Sans']
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
          light: '#A4C6FF',
          default: '#6CA3FF',
          dark: '#2576FF'
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
