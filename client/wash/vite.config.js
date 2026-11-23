import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Project page URL: https://<user>.github.io/golden-motors/
// The build uses that subpath; dev stays on the site root.
const repoName = "golden-motors";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
}));
