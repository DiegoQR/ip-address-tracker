import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return ({
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: Number(env.PORT),
    }
    
  });
});


