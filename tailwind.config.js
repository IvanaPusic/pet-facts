/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f7f7f7',
        secondary: '#2b2b2b',
        dark: '#1d1d1d',
      },
      fontFamily: {
        'open-sans': ["'Open Sans'", 'sans-serif'],
      },
    },
    fontSize: {
      '4xl': '3.625rem',
      '3xl': '3.25rem',
      '2xl': '2.875rem',
      xl: '2.25rem',
      large: '1.25rem',
      base: '1.125rem',
      small: '1.10804rem',
      xs: '1rem',
    },
  },
  plugins: [],
};
