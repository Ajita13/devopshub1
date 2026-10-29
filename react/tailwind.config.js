/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        devops: {
          orange: "#F97316",
          orangeDark: "#EA580C",
          black: "#0B0B0B",
          sidebar: "#111111",
        },
      },

      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        glow: "0 0 25px rgba(249, 115, 22, 0.20)",
      },
    },
  },

  plugins: [],
};