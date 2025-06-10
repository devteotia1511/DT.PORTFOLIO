/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
<<<<<<< HEAD
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
=======
          50: '#e3f5fd',
          100: '#c7ebfb',
          200: '#8fd7f7',
          300: '#57c3f3',
          400: '#1fafef',
          500: '#00aeef', // Base primary color
          600: '#0098d7',
          700: '#007db3',
          800: '#005f8f',
          900: '#004a73',
        },
        secondary: {
          50: '#fde8e8',
          100: '#fbd1d1',
          200: '#f7a3a3',
          300: '#f37575',
          400: '#ef4747',
          500: '#ed1c24', // Base secondary color
          600: '#d4171f',
          700: '#b3131a',
          800: '#8f0f15',
          900: '#730c11',
        },
        accent: {
          50: '#e3f5fd',
          100: '#c7ebfb',
          200: '#8fd7f7',
          300: '#57c3f3',
          400: '#1fafef',
          500: '#00aeef', // Matching primary color
          600: '#0098d7',
          700: '#007db3',
          800: '#005f8f',
          900: '#004a73',
>>>>>>> aa396a6 (Hero page updated)
        },
        dark: {
          50: '#f0f0f5',
          100: '#d9d9e6',
          200: '#b3b3cc',
          300: '#8c8cb3',
          400: '#666699',
          500: '#4d4d80',
          600: '#3e3e66',
          700: '#2f2f4d',
          800: '#1f1f33',
          900: '#10101a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
<<<<<<< HEAD
        'hero-gradient': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        'about-gradient': 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
        'experience-gradient': 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
        'projects-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'skills-gradient': 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
        'contact-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
=======
        'dark-gradient': 'linear-gradient(135deg, #ed1c24 0%, #007db3 100%)',
        'dark-gradient-subtle': 'linear-gradient(135deg, #d4171f 0%, #0098d7 100%)',
        'text-gradient': 'linear-gradient(90deg, #00aeef, #ed1c24, #00aeef)',
        'text-gradient-accent': 'linear-gradient(90deg, #ed1c24, #1fafef, #ed1c24)',
>>>>>>> aa396a6 (Hero page updated)
      },
      backgroundSize: {
        '200%': '200% 200%',
      }
    },
  },
  plugins: [],
};