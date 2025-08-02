const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          pdf: ['html2pdf.js'],
          editor: ['@monaco-editor/react']
        }
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/GetEasyCV/' : '/'
}) 