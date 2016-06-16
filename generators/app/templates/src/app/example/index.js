/**
 * @File:      示例页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-05 19:35:07
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {};
    },
    events: {
        
    },
    components: {
        
    },
    methods: {
        click: function () {
            $.ajax({
                type: 'get',
                url: 'example',
                dataType: 'json',
                success: function (json) {
                    console.log(json);
                }
            });
        }
    }
});