import { defineConfig } from "vitest/config"
import { fileURLToPath } from "node:url"
import path from "node:path"

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Explicit @/ -> src alias (not tsconfig-paths, which skips files that
  // tsconfig `exclude`s — and the tests dir is excluded from the app tsconfig).
  resolve: {
    alias: [{ find: /^@\//, replacement: path.resolve(root, "src") + "/" }],
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
})
