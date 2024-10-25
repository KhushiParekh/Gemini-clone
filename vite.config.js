import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from `.env`
dotenv.config();

export default defineConfig({
  plugins: [react()], // Vite React plugin
  define: {
    // Expose environment variables as process.env
    'process.env': {
      GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    },
  },
});
