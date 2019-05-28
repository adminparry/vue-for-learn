module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
