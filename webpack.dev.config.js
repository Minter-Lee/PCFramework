/**
 * webpack开发环境配置文件
 * author :  MinterLee@hotmail.com
 * date : 2017.12.26
**/
var webpack = require('webpack');
var baseConfig = require('./webpack.config.js');

// 开发下可追加热部署配置
baseConfig.entry.index.push(
  'webpack/hot/dev-server',    
  'webpack-dev-server/client?http://localhost:9090/'
);

baseConfig.plugins.push(
	new webpack.HotModuleReplacementPlugin()
)

module.exports = baseConfig;