const path = require('path'); // <-- Agrega esta línea

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/skincare-mobile-app/' : '/',
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};