const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new HtmlWebpackPlugin({
      inject: 'head',
      template: path.join(__dirname, '/src/index.ejs'),
      filename: path.join(__dirname, '/www/index.html'),
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ];

  // プロダクションビルド用プラグイン追加
  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
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
      app: path.join(__dirname, '/src/js/app.js'),
      vendor: ['angular', 'onsenui'],
    },
    output: {
      path: path.join(__dirname, '/www/assets'),
      filename: 'bundle.js',
    },
    devtool: isProd ? false : 'inline-source-map',
    resolve: {
      extensions: [".html", ".js", ".json", ".css", ".scss"],
    },
    plugins,
    module: {
      rules: [{
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      }, {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        use: ['url-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader']
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }, {
        test: /\.html?$/,
        use: [{
          loader: 'ngtemplate-loader',
          options: {
            relativeTo: path.join(__dirname, '/src/')
          }
        }, {
          loader: 'html-loader',
          options: {
            minimize: isProd
          }
        }]
      }]
    }
  };
};