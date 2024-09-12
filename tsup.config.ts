import { defineConfig, type Options } from 'tsup'

const sharedConfig: Options = {
  entry: ['src/index.ts'],
  clean: true,
  shims: true,
  treeshake: true
}

export default defineConfig([
  {
    ...sharedConfig,
    format: 'esm',
    dts: true
  },
  {
    ...sharedConfig,
    format: 'cjs'
  }
])
