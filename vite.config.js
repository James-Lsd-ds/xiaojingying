import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './' 表示使用相对路径，这样无论部署到什么地址都能正常运行
  base: './',
})
