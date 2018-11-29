const webpack = require('webpack')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'cheap-module-source-map',
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  },
  baseUrl: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://t33.zetadata.com.cn:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  }
}