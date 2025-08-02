/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        'editor-bg': '#1e1e1e',
        'editor-fg': '#d4d4d4',
        'preview-bg': '#ffffff',
      }
    },
  },
  plugins: [],
} 