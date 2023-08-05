// path 模块提供了操作路径的功能
// 这是几个较为常用的api
/*
 path.resolve  拼接规范的绝对路径 (常用)
 path.sep      获取操作系统的路径分隔符
 path.parse    解析路径并返回对象
 path.basename 获取路径的基础名称
 path.dirname  获取路径的目录名
 path.extname  获取路径的扩展名
 */

const path = require('path')
// 拼接绝对路径  resolve  (重要)
console.log(path.resolve(__dirname, '0.test.js'))   //  第一个参数传绝对路径__dirname  第二个参数传相对路径   // D:\桌面\Node.js\0.test.js

// 获取路径分隔符  sep
console.log(path.sep)     //   \   windows \  linux /
// 解析路径  parse
console.log(__filename)   // 这个类全局变量保存了 文件的绝对路径       //  D:\桌面\Node.js\11.path API.js
const pathName = path.parse(__filename)  // 解析路径 path.parse() 返回一个对象 
console.log(pathName)
/* {
  root: 'D:\\',                 盘符
  dir: 'D:\\桌面\\Node.js',     文件夹路径
  base: '11.path API.js',       文件名(含扩展名)
  ext: '.js',                   文件扩展名
  name: '11.path API'           文件名
} */

// 路径的文件名
console.log(path.basename(__filename))    // 11.path API.js
// 路径的目录名
console.log(path.dirname(__filename))     // D:\桌面\Node.js
// 路径的扩展名
console.log(path.extname(__filename))     // .js







