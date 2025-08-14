import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTagger from "vite-tagger";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      host: "::",
      port: 8080,
      allowedHosts: true,
    },
    plugins: [
      react(),
      viteTagger({ prefixName: "wb" }),
    ],
    base: './'
  };
});
