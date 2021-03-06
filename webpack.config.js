const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: 'style-loader!css-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
