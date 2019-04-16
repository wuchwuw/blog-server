const path = require('path')
const webpack = require('webpack')
console.log(path.join(__dirname, '../dist'))
console.log(path.join(__dirname, '../client/index.js'))
module.exports = {
  mode: 'development',
  entry: {
    index: [
      'webpack-hot-middleware/client',
      './client/entry-client.js'
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}