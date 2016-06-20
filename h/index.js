var os = require('os');
var path = require('path');
var fs = require('fs');
var process = require('process');
var generators = require('yeoman-generator');
var logo = require('../h/logo').LGLogo;
module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    echoHelp: function () {
        this.pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
        console.log(logo(this));
        var txt = [
            '',
            'lg@v' + this.pkg.version,
            'node@v' + process.version.substring(1),
            'os@' + os.type() + ' ' + os.release(),
            '',
            'Yeoman 命令',
            '   yo lg:h       显示帮助',
            '   yo lg         在根目录执行，初始化Project',
            '',
            'gulp 命令',
            '   gulp        启动server调试服务',
            '   gulp server 启动server调试服务',
            '   gulp clean  清除项目',
            '',
            '',
            '工具文档：https://github.com/liubiao0810/generator-lg',
            'author by @花夏'
        ].join('\n');
        console.log(txt);
    }
});