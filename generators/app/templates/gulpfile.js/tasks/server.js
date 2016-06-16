/**
 * @File:      server启动
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 18:30:57
 */
var gulp = require('gulp');
var config = require('./');
var mock = require('../lib/mockLocal');
gulp.task('server', ['build'], function () {
    var app = require('lg-server');
    var static_dir = config.distPath;
    // 本地模拟数据和远程服务器数据切换, 1:本地   0:远程服务器
    var mockLocal = 1;
    var cab = null;
    if (mockLocal) {
        cab = function (req, res) {
            mock.mockLocal(req, res);
        }
    }
    app.createServer(static_dir, cab);
});