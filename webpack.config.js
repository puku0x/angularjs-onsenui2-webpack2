const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  // プロダクションビルド判定
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  // プラグイン設定
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin({
      filename: "bundle.css",
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
    //new webpack.NamedModulesPlugin(),
  ];

  // プロダクションビルド用プラグイン追加
  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        }
      })
    );
  }

  return {
    entry: {
      app: './src/js/app.js',
      vendor: ['angular', 'onsenui'],
    },
    output: {
      path: path.join(__dirname, '/www/assets'),
      filename: 'bundle.js',
    },
    devtool: isProd ? false : 'inline-source-map',
    plugins,
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }, {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        use: 'file-loader'
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
      ]
    },
    devServer: {
      inline: true,
    },
  };
};