/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff88',
          dark: '#00cc6a',
          light: '#33ffaa',
        },
        secondary: {
          DEFAULT: '#00ccff',
          dark: '#00aadd',
          light: '#33ddff',
        },
        accent: {
          pink: '#ff0080',
          purple: '#8b5cf6',
          orange: '#ff8c00',
        },
        dark: {
          DEFAULT: '#0f0f0f',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -30px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, 20px) rotate(180deg)' },
          '75%': { transform: 'translate(20px, 30px) rotate(270deg)' },
        },
      },
    },
  },
  plugins: [],
}