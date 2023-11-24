export default {
  outDir: 'dist',

  base: '/',

  css: {
    preprocessorOptions: {
      scss: {},
    },
    include: ['style.css']
  },

  server: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  build: {
    outDir: 'dist',
    minify: 'terser',
    lib: false,
    rollupOptions: {},
  },
};
