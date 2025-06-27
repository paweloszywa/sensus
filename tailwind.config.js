/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f3ff', 
          200: '#c7e9ff',
          300: '#a6d8ff',
          400: '#74c0fc',
          500: '#1e3a5f', // główny niebieski z logo
          600: '#1a334f',
          700: '#162b42',
          800: '#122435',
          900: '#0e1d28',
        },
        secondary: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5dd5db', // turkusowy z logo  
          400: '#4fd1c7',
          500: '#14b8a6',
          600: '#0f766e',
          700: '#0d5f5a',
          800: '#0a4b47',
          900: '#083d39',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#f4a261', // pomarańczowy z logo
          500: '#e76f51',
          600: '#d2440e', 
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
