// 导入uniq包
// const uniq = require('./node_modules/uniq')  或 ./node_module/uniq/uniq.js
const uniq = require('uniq')

const arr = [1,4,5,1,2,5,1,2,1]
const result = uniq(arr)
console.log(result);    //  [ 1, 2, 4, 5 ]


// node_modules 文件夹下存放下载的包
// package-lock.json 包的锁文件，用来锁定包的版本
// 安装完uniq后 uniq就是当前这个包的一个【依赖包】，或简称为【依赖】 uniq是当前包的依赖包，当前包依赖uniq