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
        // target: 'http://localhost:3000',
        target: 'https://big-middle-platform.herokuapp.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/auth': ''
        }
      }
    }
  }
}
