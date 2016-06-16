# generator-lg 脚手架（beta版）
命名：前朱雀为陵光,后玄武为执名,左青龙为孟章,右白虎为咸池
第一组开源项目统一用`lg(陵光，朱雀)`命名 （一个l  3个g  lingguang  名字而来）


## Vue.js + Webpack + gulp

	1.打包工具：webpack
	2.自动化构建工具：gulp
	3.SPA框架：vue
## 步骤
    
    1.进入当前目录;

    2.npm install (如果安装了cnpm可以使用 cnpm install) 
            
[cnpm安装教程](http://npm.taobao.org/)

    3.gulp 或者  gulp server 
      
      (如果提示node模块为安装，那么手动安装对应的模块即可)


## 关于配置
##### 路由配置：
> src > app > config-router.js

```javascript
router.map({
    '/index': {
        component: function (resolve) {
            require(['./index/'], resolve);
        }
    }
});
```
这里面添加需要的路由配置;
##### 本地mock：
 gulpfile.js > tasks > server.js > 
修改： 
// 本地模拟数据和远程服务器数据切换, 1:本地   0:远程服务器
var mockLocal = 1;

get请求：src > mock > GET > 建立对应地址的文件夹，最深层文件夹里新建：index.json   json文件就是写要mock的数据
对于post请求，同上...
todo...