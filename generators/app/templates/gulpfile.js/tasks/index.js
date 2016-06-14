/**
 * @File:      全局通用配置
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-14 19:14:11
 */
var path = require('path');
var config = {};
var base = path.join(__dirname, '../../');

config.basePath = '';
config.distPath = 'dist';
config.publicDirectory = base + config.distPath + '/' + config.basePath;
config.sourceDirectory = base + 'src/app';
config.root = base + 'src';
config.devModulesPath = base + 'node_modules';

module.exports = config;
