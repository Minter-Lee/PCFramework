/**
 * webpack-dev-server配置文件
 * author :  MinterLee@hotmail.com
 * date : 2017.12.26
**/
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.dev.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    // 访问根目录路径（index.html所在目录）
    contentBase: 'app',
    filename: 'indexBundle.js',
    publicPath: '/',
    hot: true,
    stats: {
        colors: true
    },
    historyApiFallback: true
});
server.listen(9090, 'localhost', function() {});