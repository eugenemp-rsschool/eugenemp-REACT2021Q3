import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  /* Shared Options */
  // root: '',
  // base: '',
  // mode: '',
  // define: { '': '' },
  plugins: [
    reactRefresh({
      exclude: ['dist', 'node_modules'],
    }),
    eslintPlugin({
      exclude: ['dist', 'node_modules'],
    }),
  ],
  // publicDir: '',
  // cacheDir: '',
  /* resolve: {
    alias: {'': ''},
    dedupe: [''],
    conditions: [''],
    mainFields: [''],
    extensions: []
  }, */
  /* css: {
    modules: {
      scopeBehaviour: 'global',
      globalModulePaths: [/ /],
      generateScopedName: '',
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    postcss: '',
    preprocessorOptions: {'': ''},
  }, */
  /* json: {
    namedExports: true,
    stringify: false,
  }, */
  /* esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`,
  }, */
  // assetsInclude: [''],
  // logLevel: 'info',
  // clearScreen: true,
  // clearScreen: true,
  // envDir: '',

  /* Server Options */
  server: {
    // host: '',
    // port: 3000,
    // strictPort: false,
    // https: false,
    open: true,
    /* proxy: {
      '': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^ /, '')
      },
    }, */
    // cors: true,
    force: true,
    /* hmr: {
      overlay: false,
      clientPort: 0,
      server: {},
    }, */
    // watch: {},
    // middlewareMode: 'html',
    /* fs: {
      strict: false,
      allow: [''],
    } */
  },

  /* Build Options */
  build: {
    target: 'es2015',
    // polyfillDynamicImport: false,
    // outDir: 'dist',
    // assetsDir: 'assets',
    // assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: true,
    // rollupOptions: {},
    // commonjsOptions:  {},
    // dynamicImportVarsOptions: {},
    // lib: false,
    // manifest: false,
    // minify: 'terser',
    terserOptions: {},
    // cleanCssOptions: {},
    // write: true,
    // emptyOutDir: true,
    // brotliSize: true,
    // chunkSizeWarningLimit: 500,
    // watch: null,
  },

  /* Dep Optimization Options */
  /* optimizeDeps: {
    entries: '',
    exclude: [''],
    include: [''],
    keepNames: false,
  }, */

  /* SSR Options (SSR options may be adjusted in minor releases) */
  /* ssr: {
    external: [''],
    noExternal: '',
    target: 'node',
  }, */
});
