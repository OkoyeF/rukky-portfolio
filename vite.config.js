import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        portfolio: 'portfolio.html',
        contact: 'contact.html'
      }
    }
  }
})