/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        orz: "#006acc",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyangkeyframe 1s ease-in-out infinite",
      },
      keyframes: {
        goyangkeyframe: {
          "0%, 100%": { transform: "rotate (-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
