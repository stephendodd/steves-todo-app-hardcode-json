var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve('src')+'/app.jsx',
  ],
  output: {
    path: path.resolve('public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: "/node_modules/",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
