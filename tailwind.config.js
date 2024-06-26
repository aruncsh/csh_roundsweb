/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],

  theme: {
    extend: {},
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}

