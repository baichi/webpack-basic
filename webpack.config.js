var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var publicPath = path.resolve(__dirname, 'public');

module.exports = {
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
    output: {
        path: publicPath,
        filename: 'index.js'
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.less/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new ExtractTextPlugin("bundle.css")
    ],
    devtool: 'source-map'
};
