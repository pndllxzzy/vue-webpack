var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.dev.conf");
var PORT = 51888;

config.entry.app = config.entry.app.constructor === Array ? config.entry.app : [config.entry.app];
config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + PORT, "webpack/hot/dev-server");
config.plugins = (config.plugins || []).concat([new webpack.HotModuleReplacementPlugin()]);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: 'src/',
    hot: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {colors: true}
});

server.listen(PORT, "localhost", function () {
    console.log('server is listening at Port 51888');
});
