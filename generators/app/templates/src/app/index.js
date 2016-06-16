/**
 * @File:      项目入口文件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 23:44:29
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
window.$ = window.jQuery = require('jquery');
require('./index.css');
Vue.use(VueRouter);
var router = new VueRouter({
    saveScrollPosition: true
});
var route = require('./router-config');
router.map(route);
router.start({}, '#app');
module.exports = app;