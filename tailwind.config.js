module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      hero: "url('/images/hero_banner.png')",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
      fontFamily: {
        "bebas-neue": ["var(--font-bebas-neue)"],
        "unica-one": ["var(--font-unica-one)"],
      },
      colors: {
        "kreativat-dark-blue": "#121A1F",
        "kreativat-dark-button": "#1E2B34",
        "kreativat-faint-white": "rgba(255,255,255,0.7)",
        "kreativat-input-placeholder": "#A6A6A6",
        "kreativat-input-black": "#0C0C0C",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
