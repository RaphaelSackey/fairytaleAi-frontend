// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./unitTests/vitest-setup.ts"],
    include: ["unitTests/**/*.test.{js,ts,jsx,tsx}"],
    exclude: ["e2e/**/*.ts"],
  },
});
