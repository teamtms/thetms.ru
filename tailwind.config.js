/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '32rem',
      },
      colors: {
        'app-accent': '#0a224f',
        'app-card': '#181b24',
        'app': '#11141d',
      }
    },
  },
  plugins: [],
}

