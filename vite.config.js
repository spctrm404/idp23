import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/idp23/',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
