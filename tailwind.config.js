/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#111D5E',
        lightColor: '#FEFCF8',
        lightColor2: '#FEFBF8',
        darkGrayColor: '#282A2E',
        grayColor: '#ADB1BA',
        grayColor2: '#606878',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-banner.png')",
      },
      boxShadow: {
        'btnShadow': '0px 10px 20px 0px rgba(161, 161, 161, 0.25)',
      },
    },
  },
  plugins: [],
}

