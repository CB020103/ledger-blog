/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F8FA',
        ink: '#0B1220',
        line: '#DDE1E8',
        signal: '#2E5EFF',
        up: '#0E8345',
        down: '#C4291C',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '1px',
        DEFAULT: '2px',
        lg: '2px',
      },
    },
  },
  plugins: [],
}
