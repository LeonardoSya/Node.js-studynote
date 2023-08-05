// 导入模块
const test = require('./test.js')  
// require返回的结果是 目标模块中module.exports的值   并不是exports的值

// 调用函数
console.log(test)  // { test: [Function: test], sleep: [Function: sleep] }
test.work()
test.sleep()

console.log(module.exports === exports)  // true

console.log(module)
/*
Module {
  id: '.',
  path: 'D:\\桌面\\Node.js\\29.模块暴露数据',
  exports: {},
  filename: 'D:\\桌面\\Node.js\\29.模块暴露数据\\index.js',
  loaded: false,
  children: [
    Module {
      id: 'D:\\桌面\\Node.js\\29.模块暴露数据\\test.js',
      path: 'D:\\桌面\\Node.js\\29.模块暴露数据',
      exports: 123,
      filename: 'D:\\桌面\\Node.js\\29.模块暴露数据\\test.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'D:\\桌面\\Node.js\\29.模块暴露数据\\node_modules',
    'D:\\桌面\\Node.js\\node_modules',
    'D:\\桌面\\node_modules',
    'D:\\node_modules'
  ]
}

*/
