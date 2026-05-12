/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFDF7',
        card: '#FFFFFF',
        ink: '#2C2A26',
        'ink-soft': '#6B6760',
        'ink-faint': '#A8A29A',
        line: '#EFE9DC',
        'line-strong': '#E2DBC9',
        yellow: '#F4D77A',
        'yellow-soft': '#FBEDB8',
        'yellow-deep': '#C9A33A',
        blue: '#A9D4E5',
        'blue-soft': '#DCEEF5',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Noto Sans JP"', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        mobile: '375px',
      },
      borderRadius: {
        '4xl': '22px',
      },
      boxShadow: {
        card: '0 2px 10px rgba(60,50,20,0.04), 0 8px 24px rgba(60,50,20,0.05)',
        app: '0 0 40px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
