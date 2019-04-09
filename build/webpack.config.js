const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './client/index.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
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
  }
}