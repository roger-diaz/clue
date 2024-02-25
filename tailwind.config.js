/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}"
  ],
  safelist: [
    'text-blue-600',
    'text-gray-900',
    'text-gray-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

