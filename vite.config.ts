import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import devServer, { defaultOptions } from '@hono/vite-dev-server'

export default defineConfig({
  ssr: {
    noExternal: true
  },
  build: {
    rollupOptions: {
      external: [...builtinModules, /^node:/],
      input: '_worker.ts',
      output: {
        dir: './dist'
      }
    }
  },
  plugins: [
    devServer({
      entry: 'src/index.tsx',
      exclude: ['/static/.+', ...defaultOptions.exclude]
    })
  ]
})
