import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain React + Vite SPA — output in /dist, suitable for GitHub Pages.
// `base: "./"` makes asset URLs relative so it works whether you deploy to
// `username.github.io/` (root) or `username.github.io/repo-name/` (subfolder),
// and also on Vercel / Netlify / any static host.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
