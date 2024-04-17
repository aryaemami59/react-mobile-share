import { defineConfig } from "tsup"

export default defineConfig(options => {
  return [
    {
      clean: true,
      entry: ["index.ts"],
      format: ["cjs", "esm"],
      sourcemap: true,
      shims: true,
      dts: true,
      ...options,
    },
  ]
})
