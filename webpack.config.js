const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(__dirname, 'js/index.js')],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  watch: true,
  mode: 'development',
};
