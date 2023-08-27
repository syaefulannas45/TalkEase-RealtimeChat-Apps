// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          blue_100: '#74A3FD',
          dark_100: '#333333',
          grey_100: '#BEC0C7',
          grey_200: '#959DAE',
          link: '#FFBB0D',
        },
        background: {
          blue_100: '#A7C8FF',
          dark_100: '#333333',
          yellow: '#FFCD4F',
          grey_300: '#F3F0F0',
        },
        button: {
          blue_1: '#74A3FD',
        },
        border: '#A7C3FD',
        placeholder: '#BEC0C7',
      },
      fontFamily: {
        400: ['Poppins-Regular'],
        500: ['Poppins-Medium'],
        600: ['Poppins-SemiBold'],
        700: ['Poppins-Bold'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
