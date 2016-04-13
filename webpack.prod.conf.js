var webpack = require('webpack');
var path = require('path');
var baseConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

baseConfig.module.loaders = (baseConfig.module.loaders || []).concat([{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url?limit=8192&name=img/[name].[hash:6].[ext]'
}]);
baseConfig.output.filename = '[name].[chunkhash:6].js';
baseConfig.plugins = (baseConfig.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: '../index.html'
    }),
    new webpack.optimize.UglifyJsPlugin()
]);

module.exports = baseConfig;
