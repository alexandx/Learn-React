var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader' },
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.svg$/, use:'file-loader'}
    ]
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

};

module.exports = config;
