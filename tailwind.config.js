/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E", // Slightly lighter dark grey for the main background
        card: "#2A2A2A", // Solid grey for cards
        primary: "#A99AF8", // The exact light purple from the template
        primaryDark: "#8B7AE0", // Hover state for buttons
        textDark: "#111111", // Text inside buttons
        textLight: "#FFFFFF",
        textMuted: "#A3A3A3",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
