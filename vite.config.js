import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    sourcemap: false,
  },
  plugins: [
    ...atomico({
      cssLiterals: { postcss: true },
    }),
  ],
});
