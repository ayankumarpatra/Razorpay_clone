import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Razorpay_clone/',

  plugins: [
    tailwindcss(),
  ],
})