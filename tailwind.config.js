/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0d",
        surface: "#18181b",
        surfaceRaised: "#212124",
        accent: "#e63946",
        accentDim: "#a4222c",
        text: "#f5f5f1",
        muted: "#8a8a8e",
        border: "#2a2a2e",
        matchGreen: "#46d369",
      },
      fontFamily: {
        display: ["Bebas Neue", "Arial Narrow", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};