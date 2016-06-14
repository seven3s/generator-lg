/**
 * @File:      server启动
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 18:30:57
 */
var gulp = require('gulp');
var config = require('./');
gulp.task('server', ['build'], function () {
    var app = require('lg-server');
    var static_dir = config.distPath;
    app.createServer(static_dir);
});