import { defineConfig } from "tsup";

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: {
    resolve: true,
  },
  entry: {
    index: "src/index.ts",
    "runtime-safe": "src/runtimeSafe.ts",
    types: "src/types.ts",
    zod: "src/zod.ts",
  },
  format: "esm",
  minify: true,
  watch,
}));
