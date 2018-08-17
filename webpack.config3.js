const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index2.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './')
  },
  module : {
    rules : [
      { test : /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
  		sourceMap: true,
  		parallel: true,
  		uglifyOptions: {
  			warnings : false
  		}
    }),
    new webpack.DefinePlugin({
  		'process.env' : {
  			NODE_ENV : JSON.stringify('production')
  		}
  	})
  ],
  resolve: {
    modules: ['node_modules']
  }
};
