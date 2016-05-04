var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve('src/app.jsx'),
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
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
