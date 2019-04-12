const path = require('path')
const webpack = require('webpack')
console.log(path.join(__dirname, '../dist'))
console.log(path.join(__dirname, '../client/index.js'))
module.exports = {
  mode: 'development',
  entry: {
    index: [
      'webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr&noInfo=false&reload=true&quiet=false',
      './client/index.js'
    ]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '../client'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}