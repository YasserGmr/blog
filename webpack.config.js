const path = require('path');

module.exports = {
  entry: ['./src/pace.min.js', './src/main.js', './src/modernizr.js'],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  }
};
