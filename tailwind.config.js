/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px',
        '16': '16px',

      }
    },
  },
  plugins: [],
}

