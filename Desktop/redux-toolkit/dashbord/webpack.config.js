const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin(/Warning in DefinePlugin/),
    // ...
  ],
  // ...
};
