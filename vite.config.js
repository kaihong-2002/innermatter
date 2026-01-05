import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/innermatter/', // Hardcoded for guaranteed GH Pages support
    plugins: [react()],
    server: {
      proxy: {
        '/api/gas': {
          target: env.VITE_GOOGLE_APP_SCRIPT_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/gas/, ''),
          secure: false,
        }
      }
    }
  };
});
