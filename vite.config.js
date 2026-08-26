import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        members: resolve(__dirname, 'members/index.html'),
        competitors: resolve(__dirname, 'competitors/index.html'),
        parents: resolve(__dirname, 'parents/index.html'),
        volunteers: resolve(__dirname, 'volunteers/index.html'),
        calendar: resolve(__dirname, 'calendar/index.html'),
        eventDistrict: resolve(__dirname, 'events/district-cdc/index.html'),
        eventState: resolve(__dirname, 'events/state-cdc/index.html'),
        eventIcdc: resolve(__dirname, 'events/icdc/index.html'),
      },
    },
  },
});
