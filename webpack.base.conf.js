var path = require('path');

module.exports = {
    entry: {
        app: 'src/app'
    },
    output: {
        path: path.resolve(__dirname, 'dist/src'),
        publicPath: '/src/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        root: __dirname,
        alias: {
            'smCSS': 'src/lib/SUI/css/sm.css'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|lib)/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'css!less'
        }, {
            test: /\.sass$/,
            loader: 'css!sass'
        }]
    },
    plugins: [],
    vue: {
        loaders: {
            js: 'babel',
            less: 'vue-style!css!less',
            sass: 'vue-style!css!sass'
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ["transform-runtime"]
    }
};