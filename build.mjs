import { build } from "vite";
import react from "@vitejs/plugin-react";

await build({
  configFile: false,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "three-eco": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          rapier: ["@react-three/rapier"],
        },
      },
    },
  },
});
