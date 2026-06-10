import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site served from the domain root (nick-sh-oh.github.io), so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
