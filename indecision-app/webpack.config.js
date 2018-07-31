const path = require('path');
// entry --> output
// webpack.js.org -> resoruces

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
