const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => ({
  entry: {
    app: './src/js/app.js',
    vendor: ['angular', 'onsenui'],
  },
  output: {
    path: path.join(__dirname, '/www/assets'),
    filename: 'bundle.js',
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin({
      filename: "bundle.css",
      allChunks: true
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },{
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        use: 'file-loader'
      },{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['ng-annotate-loader', 'babel-loader']
      }
    ]
  },
  devServer: {
    inline: true,
  },
});