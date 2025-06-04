const path = require('path'); // <-- Agrega esta línea

module.exports = {
  publicPath: '/',
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