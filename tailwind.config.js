/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014", // Deep space violet/blue for the main background
        card: "#0B061A", // Darker solid card to make glass pop better
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
