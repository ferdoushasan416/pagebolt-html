/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          'xl': "1240px"
        }
      },
      colors: {
        "primary": {
          DEFAULT: "#2173FF"
        },

        "black": {
          DEFAULT: "#000000",
          'secondery': "#001726"
        },
      },
      boxShadow: {
        'product-image': '0px 20px 40px 0px rgba(63.99999999999993, 71.99999999999993, 81.99999999999991, 0.12)',
        'feature-image': '0px 10px 20px 0px rgba(63.99999999999993, 71.99999999999993, 81.99999999999991, 0.13)',
        'save-money': '0px 20px 40px 0px rgba(63.99999999999993, 71.99999999999993, 81.99999999999991, 0.1)',
        'testimonial-box': '0px 30px 60px 0px  rgba(63.999999999999986, 72, 81.99999999999999, 0.1)'
      }
    },
  },
  plugins: [],
}

