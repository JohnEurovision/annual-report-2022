module.exports = {
  theme: {
      fontFamily: {
        ProximaNova: ['Proxima Nova', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#1B1B1B',
        'blue': '#1B4098',
        'orange': '#FF7800',
      },
      extend: {
        fontSmoothing: {
          antialiased: 'antialiased',
          subpixel: 'subpixel-antialiased',
        },
        backgroundImage: {
          'blue-static': "url('~/public/blue-static.jpg')",
          'light-static': "url('~/public/light-static.png')",
        }
      }
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }