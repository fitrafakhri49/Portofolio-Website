module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020c1b",
        accent: "#64ffda",
        textMain: "#ccd6f6",
        textMuted: "#8892b0",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "monospace"],
        sans: ["Calibre", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};