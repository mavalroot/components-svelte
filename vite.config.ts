import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import * as path from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $shared: path.resolve('./src/shared')
    }
  }
})
