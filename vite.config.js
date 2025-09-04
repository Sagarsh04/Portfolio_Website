import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  const plugins = [react(), splitVendorChunkPlugin()]
  if (isProd) {
    plugins.push(
      visualizer({
        filename: 'dist/bundle-stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
        template: 'treemap'
      })
    )
  }

  return {
    plugins,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      dedupe: ['react', 'react-dom']
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        'framer-motion',
        'maath'
      ]
    },

    esbuild: isProd ? { drop: ['console', 'debugger'] } : {},

    build: {
      target: 'es2020',
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'esbuild',
      modulePreload: { polyfill: false },
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('framer-motion')) return 'framer'
              if (id.includes('three') || id.includes('@react-three') || id.includes('maath')) return 'three'
              // let Rollup handle react/react-dom & other vendors
            }
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
