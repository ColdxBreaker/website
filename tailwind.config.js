module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h3: {
              color: "#333",
            },
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
