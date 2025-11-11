module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        elms_sans: [`Elms Sans`, 'sans-serif'],
      },
      colors: {
        neon: '#00FFAA',
      },
    },
  },
  plugins: [],
}
