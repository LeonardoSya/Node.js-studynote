/*
模板引擎是【分离用户界面和业务数据】的一种技术
EJS是一个高效的js模板引擎    ejs用来分离html和js
*/

const ejs = require('ejs')
const fs = require('fs')

const js = 'Node.js'
const peat = '爬虫'
const data = '爬取数据'
// 用ejs渲染
// render渲染  render()会对里面的内容做一个解析  把 <%= %>里面的内容替换成 对象{}中str2属性的值 再与前面的内容拼接
const renderStr = fs.readFileSync('52.access.html').toString()
const result = ejs.render(renderStr, { peat: peat, data })
console.log(result)

// console.log(fs.readFileSync('52.access.log'))   //  <Buffer 3c 68 31 3e 4e 6f 64 65 2e 6a 73 20 3c 25 3d 20 73 74 72 32 20 25 3e 3c 2f 68 31 3e>

// 简化:
