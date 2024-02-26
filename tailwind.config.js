/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}"
  ],
  safelist: [
    'text-blue-300',
    'text-blue-600',
    'text-gray-200',
    'text-gray-900',
    'text-white',
    "text-black",
    'dark:text-blue-300',
    'dark:text-blue-600',
    'dark:text-gray-200',
    'dark:text-gray-900',
    'dark:text-white',
    "dark:text-black",
    'border-blue-300',
    'border-blue-600',
    'border-gray-200',
    'border-gray-900',
    'border-white',
    "border-black",
    'dark:border-blue-300',
    'dark:border-blue-600',
    'dark:border-gray-200',
    'dark:border-gray-900',
    'dark:border-white',
    "dark:border-black",
    { pattern: /(w|h)-*/  }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

