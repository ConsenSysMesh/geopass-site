/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GPGreen: {
          DEFAULT: "#17C3B2"
        },
        TTBlue: {
          DEFAULT: "#227C9D"
        },
        ZKOrng: {
          DEFAULT: "#FFCB77"
        },
        VPurp: {
          DEFAULT: "#AD2D8D"
        },
        EthFrost: {
          DEFAULT: "#BFDDD4"
        },
        LCoral: {
          DEFAULT: "#FE6D73"
        },
        FWhite: {
          DEFAULT: "#FEF9EF"
        },
        RBlack: {
          DEFAULT: "#24272B"
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
