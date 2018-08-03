const path = require('path');
// entry --> output
// webpack.js.org -> resoruces

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/ 
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // Define the source map 
  // This one tells the browser where the original source code is for debugging.
  // As bundle.js is not human-readable.
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

// LOADER - define how files get transformed when webpack uses them
// Uses test -> regex,
// exclude, what we dont want
