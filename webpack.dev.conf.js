var webpack = require('webpack');
var baseConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

baseConfig.module.loaders = (baseConfig.module.loaders || []).concat([{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url?limit=8192'
}]);
baseConfig.devtool = 'eval-source-map';
baseConfig.output.publicPath = '/';
baseConfig.plugins = (baseConfig.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html'
    })
]);

module.exports = baseConfig;