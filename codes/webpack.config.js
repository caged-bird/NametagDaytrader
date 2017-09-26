var path = require('path');

module.exports = {
  entry: __dirname + '/client/index.jsx',
  output: {
    path: __dirname + '/server/public/',
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname + '/client/index.jsx',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
