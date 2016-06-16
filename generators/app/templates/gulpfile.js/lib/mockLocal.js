/**
 * @File:      是否本地mock数据逻辑
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-16 19:08:20
 */
var fs = require('fs');
var chalk = require('chalk');
module.exports = {

    /**
     * mockLocal 本地mock逻辑
     *
     * @return {type} description
     */
    mockLocal: function (req, res) {
        var xredWidth = req.headers['x-requested-with'];
        if (xredWidth === 'XMLHttpRequest') {
            var config = require('../tasks/');
            var base = config.root;
            var url = base + '/mock/' + req.method + req.url + '/index.json';
            var data = fs.readFileSync(url);
            console.log('本地模拟数据...:' + chalk.green(url));
            res.write(data);
            res.end();
        }
    }
}