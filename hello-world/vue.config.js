const target = process.env.DYNO ? 'https://big-middle-platform.herokuapp.com' : 'http://localhost:3000';

module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },
  baseUrl: '/',
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: target,
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
