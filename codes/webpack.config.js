var path = require('path');

module.exports = {
  entry: __dirname + '/client/index.jsx',
  output: {
    path: __dirname + '/server/public/',
    filename: 'bundle.js',
    publicPath: ''
  },
  watchOptions:{
      poll: 2000
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
