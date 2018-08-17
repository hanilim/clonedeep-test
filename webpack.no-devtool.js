const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

// no source map. this works
module.exports = merge(common, {
  devtool: false,
  entry: './index.js',
  plugins: [
    new UglifyJsPlugin({
  		sourceMap: false,
  		parallel: true,
  		uglifyOptions: {
  			warnings : false
  		}
    })
  ]
});
