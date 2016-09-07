const webpack = require('webpack');
module.exports = {
  entry: {
    'html-loader/index': './html-loader/src/js/index'
  },
  devtool: 'eval',
  output: {
    output: './',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [

  ]
};