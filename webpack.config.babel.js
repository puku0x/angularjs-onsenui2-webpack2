import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: {
        bundle: './src/js/app.js',
        vendor: ['angular', 'onsenui'],
    },
    output: {
        path: __dirname + '/www/assets',
        filename: '[name].js',
    },
    resolve: {
        extentions: ['', '.js', '.scss']
    },
    devtool: '#inline-source-map',
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        // new webpack.optimize.UglifyJsPlugin()
        // new webpack.ProvidePlugin({
        //     angular: "angular",
        //     ons: "onsenui",
        // }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
    module: {
        //noParse: [__dirname + 'node_modules/onsenui/onsenui.js'],
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['ng-annotate', 'babel-loader'],
        }]
    },
    devServer: {
        inline: true,
    },
    postcss: () => {
        return [autoprefixer];
    }
}
