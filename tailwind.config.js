/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(40, end) forwards', // vitesse ajustée à 3 secondes
      },
    },
  },
  plugins: [],
}

