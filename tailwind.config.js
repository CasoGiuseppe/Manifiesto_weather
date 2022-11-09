/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    screens: {
      'phone': { max: "36rem" },
      'tablet-pt': "48rem",
      'tablet-ld': "62rem",
      'desktop': "75rem",
      'large-desktop': "92.5rem"
    },
    spacing: {
      none: "0px",
      xsm: ".25rem",
      sm: ".5rem",
      md: "1rem",
      lg: '1.5rem',
    },
    colors: {
      none: "none",
      gray: {
        500: "var(--sm-c-gray-500)",
        400: "var(--sm-c-gray-400)",
        300: "var(--sm-c-gray-300)",
        200: "var(--sm-c-gray-200)",
        100: "var(--sm-c-gray-100)"
      },
      blue: {
        300: "var(--sm-c-blue-300)",
        200: "var(--sm-c-blue-200)",
        100: "var(--sm-c-blue-100)"
      }
    },
    fontFamily: {
      default: "var(--sm-defualt-font-family)"
    },
    fontWeight: {
      light: "var(--sm-font-weight-light)",
      regular: "var(--sm-font-weight-regular)",
      medium: "var(--sm-font-weight-medium)",
      bold: "var(--sm-font-weight-bold)",
    },
    fontSize: {
      xs: ['var(--sm-font-size-xsmall)', { lineHeight: 'normal' }],
      sm: ['var(--sm-font-size-small)', { lineHeight: 'normal' }],
      base: ['var(--sm-font-size-medium)', { lineHeight: 'normal' }],
      lg: ['var(--sm-font-size-big)', { lineHeight: 'normal' }],
      xlg: ['var(--sm-font-size-xlarge)', { lineHeight: 'normal' }],
    },
    extend: {},
  },
  plugins: [],
}
