import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: false, // TODO: Remove this & check all files
      clean: true,
      enabled: true,
      provider: "v8",
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
    setupFiles: ["dotenv/config"],
  },
});
