/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#111D5E',
        lightColor: '#FEFCF8',
        lightColor2: '#FEFBF8',
        lightColor3: '#FAF1EB',
        lightColor4: '#FFF5EC',
        darkGrayColor: '#282A2E',
        grayColor: '#ADB1BA',
        grayColor2: '#606878',
        redColor: '#E16E4F',
        redColor2: '#FAEFE5'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-banner.png')",
      },
      boxShadow: {
        'sliderShadow': '-5px 0px 34px 0px #D7D7D7;',
      },
    },
  },
  plugins: [],
}

