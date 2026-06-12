import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@onto/banking": resolve(__dirname, "../dist/design.ts"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Server-side API lives in the same vite process via the
      // middleware mode in scripts/server.ts. The Vite dev server
      // forwards /api/* to our Hono-style handler.
      "/api": {
        target: "http://localhost:5174",
        changeOrigin: true,
      },
    },
  },
});
