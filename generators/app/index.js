/**
 * @File:      任务主文件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-06 23:54:35
 */

// 'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');
module.exports = yeoman.Base.extend({
    /**
     * constructor 构造函数
     *
     */
    constructor: function() {

    },
    prompting: function() {
        // Have LG greet the user.
        // 获取当前文件夹名称
        var folderName = path.basename(process.cwd());
        var gitConfig = require('git-config');
        var curGitUser = gitConfig.sync().user || {};
        var curUserName = curGitUser.name || '';
        var curUserEmail = curGitUser.email || '';
        var prompts = [{
            'name'   : 'projectName',
            'message': 'Name of Project?',
            'default': folderName,
            'warning': ''
        }, {
            'name'   : 'version',
            'message': 'Version:',
            'default': '0.1.0',
            'warning': ''
        }, {
            'name'   : 'author',
            'message': 'Author Name:',
            'default': curUserName,
            'warning': ''
        },
        {
            'name'   : 'email',
            'message': 'Author Email:',
            'default': curUserEmail,
            'warning': ''
        }, {
            'type': 'input',
            'name': 'isSupportGit',
            'message': '是否支持git?',
            'default': 'Y/n'
        }];
        var done = this.async();
        this.prompt(prompts, function (props) {
            this.packageName = props.projectName;
            this.version = props.version;
            this.author = props.author;
            this.email = props.email;
            this.isSupportGit = /^y/i.test(props.isSupportGit);
            done();
        }.bind(this));
    },

    writing: function() {
        this.fs.copy(
            this.templatePath('dummyfile.txt'),
            this.destinationPath('dummyfile.txt')
        );
    },

    install: function() {
        this.installDependencies();
    }
});