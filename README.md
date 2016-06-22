# generator-lg [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

# generator-lg 脚手架
命名：前朱雀为陵光,后玄武为执名,左青龙为孟章,右白虎为咸池
第一组开源项目统一用`lg(陵光，朱雀)`

> generator-lg

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lg using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
[sudo] npm install -g yo
[sudo] npm install -g generator-lg
```

Then generate your new project:

```bash
yo lg
```
目录生成成功后，请阅读：[README.md](https://github.com/liubiao0810/generator-lg/blob/dev/generators/app/templates/README.md)

项目架子初始化完成（注意：这时只有index示例页面）,目录结构如下：

    test
        ├── .gitignore
        ├── README.md
        ├── package.json
        ├── dist/
        ├── gulpfile.js
        └── src/
            ├── app/
            |   ├──example
            |   |  ├──index.tpl.html
            |   |  ├──index.css
            |   |  ├──index.js
            │   ├── config-router.js
            │   ├── index.css
            │   ├── index.html
            │   └── index.js
            ├── asset/
            │   └── img
            └── mock/
                |── GET/
                └── POST/

#具体请阅读 [wiki](https://github.com/liubiao0810/generator-lg/wiki)
## 感谢这些开源项目

1. [gulp](http://gulpjs.com/)
2. [yeoman](http://yeomanjs.org/)
3. [Stylus](http://stylus-lang.com/)
4. [Vue.js](http://vuejs.org/)
5. [webpack](https://webpack.github.io/)

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [花夏](fex.onlove.cc)


[npm-image]: https://badge.fury.io/js/generator-lg.svg
[npm-url]: https://npmjs.org/package/generator-lg
[travis-image]: https://travis-ci.org/liubiao0810@live.cn/generator-lg.svg?branch=master
[travis-url]: https://travis-ci.org/liubiao0810@live.cn/generator-lg
[daviddm-image]: https://david-dm.org/liubiao0810@live.cn/generator-lg.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/liubiao0810@live.cn/generator-lg
[coveralls-image]: https://coveralls.io/repos/liubiao0810@live.cn/generator-lg/badge.svg
[coveralls-url]: https://coveralls.io/r/liubiao0810@live.cn/generator-lg
