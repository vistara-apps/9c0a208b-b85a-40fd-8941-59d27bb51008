import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210 40% 96.1%)',
        surface: 'hsl(0 0% 100%)',
        muted: 'hsl(220 46.9% 44.9%)',
        accent: 'hsl(262.1 83.3% 54.9%)',
        border: 'hsl(220 13% 88%)',
        primary: 'hsl(220 89.9% 51.2%)',
        destructive: 'hsl(0 65.9% 52.9%)',
        'gradient-start': 'hsl(330 85% 60%)',
        'gradient-end': 'hsl(262 85% 58%)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 13%, 20%, 0.1)',
        'modal': '0 12px 28px hsla(220, 13%, 20%, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
