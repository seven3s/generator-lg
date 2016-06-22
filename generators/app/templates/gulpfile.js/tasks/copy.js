/**
 * @File:      文件拷贝任务
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-22 11:10:29
 */
var config       = require('../config/copy');
var gulp         = require('gulp');

gulp.task('copy', function () {
    return gulp.src(config.jQSrc).pipe(gulp.dest(config.jQDest));
});