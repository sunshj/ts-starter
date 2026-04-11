import { defineConfig, type UserConfig } from 'tsdown'

const sharedConfig: UserConfig = {
  entry: ['src/index.ts'],
  clean: true,
  shims: true,
  treeshake: true,
  dts: false,
  fixedExtension: false
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
