import { defineConfig } from "tsup";

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: {
    resolve: true,
  },
  entry: {
    index: "src/index.ts",
    types: "src/types.ts",
    zod: "src/zod.ts",
  },
  format: ["cjs", "esm"],
  minify: true,
  watch,
}));
