/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7f2',
          100: '#e9f0e4',
          200: '#cfe1ca',
          300: '#a6c8a2',
          400: '#7dac76',
          500: '#63995b',
          600: '#4f7f46',
          700: '#3c6535',
          800: '#2c4d27',
          900: '#20391c',
        },
        accent: {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e6e2d7',
          300: '#d3cdbf',
          400: '#b9b09f',
          500: '#9e907f',
          600: '#827560',
          700: '#675d47',
          800: '#4d4634',
          900: '#3a3327',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
