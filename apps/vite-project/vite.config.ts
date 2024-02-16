import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
      // Reference: https://github.com/vercel/turbo/discussions/620#discussioncomment-2136195
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "../../packages/ui/src"),
      },
    ],
  },
});
