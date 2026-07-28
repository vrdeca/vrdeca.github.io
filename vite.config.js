import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        members: resolve(__dirname, 'members/index.html'),
        competitors: resolve(__dirname, 'competitors/index.html'),
        parents: resolve(__dirname, 'parents/index.html'),
        calendar: resolve(__dirname, 'calendar/index.html'),
      },
    },
  },
});
