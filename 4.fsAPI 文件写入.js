// fs模块 | fsAPI
// file system 文件系统 是Node.js的内置模块 
// fs模块可以实现与硬盘的交互  文件、文件内容、文件夹的交互操作

// 一. 文件写入
// 文件写入就是将数据保存到文件中
// 1.1 writeFile 异步写入
// fs.writeFile(file, data[, options], callback)   file文件名 data待写入数据 options选项设置 callback写入回调   返回值undefined
// 导入fs模块
const fs = require('fs')  // require 是 Node.js 环境中的'全局'变量，用来导入模块
fs.writeFile('./0.test.js', 'writeFile', err => {   // 文件如果不存在 它会帮我们自动创建文件并写入
    //  如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
    if (err) {
        console.log(err)
        return
    }
    console.log('success')
})

// 1.2 writeFileSync 同步写入
// 语法  fs.writeFileSync(file, data[, options])   参数与fs.writeFile大体一致, 只是没有callback参数  返回值undefined
const fs = require('fs')
try {
    fs.writeFileSync('1.Node.js导读.md', 'writeFileSync')
    console.log('success')
} catch (e) {
    console.log(e)
}
// Node.js中的磁盘操作是由其他线程完成的，结果的处理有两种模式：
//      同步处理 js主线程 会等待其他线程的执行结果 然后再继续执行主线程的代码 效率较低
//      异步处理 js主线程 不会等待其他线程的执行结果 直接执行后续的主线程代码 效率比较高
// 而js是单线程的 先同步后异步
// writeFile使用频率高于writeFileSync 因为异步效率较高

// 1.3 appendFile / appendFileSync 追加写入
// appendFile作用是在文件尾部追加内容, appendFile语法与writeFile语法完全相同
// fs.appendFile(file, data[, options], callback)
// fs.appendFileSync(file, data[, options])   二者返回值都是undefined
const fs = require('fs')
fs.appendFile('1.Node.js导读.md', 'appendFile', err => {
    if (err) throw err;
    console.log('success')
})
fs.appendFileSync('1.Node.js导读.md', 'appendFileSync')

// writeFile options选项设置 写flag:'a' 能实现与追加写入相同的效果
const fs = require('fs')
fs.writeFile('./0.test', 'test', { flag: 'a' }, err => {   
    if (err) throw err
    console.log('success')
})

// 1.4 createWriteStream 流式写入
// fs.createWriteStream(path[, options])   path文件路径  options选项配置(可选)  返回值 Object
const fs = require('fs')
const ws = fs.createWriteStream('0.test.js')  // 可以理解为建立一个通道叫ws 然后把接下来的内容流式写入到createWriteStream()内的文件中
ws.write('\r\n半亩方糖一见开')   // 在fs模块中，\r\n 是换行标签
ws.write('\r\n天光云影共徘徊')
ws.write('\r\n问渠哪得清如许')
ws.write('\r\n为有源头活水来')
ws.close()   // 关闭这个通道    ws.end()效果一样

// 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数
// 因此，流式写入方式适合于 大文件写入或者频繁写入 的场景； 
// 而 writeFile适合于 写入频率较低 的场景



// 写入文件的场景:
// 下载文件、安装文件、保存程序日志(如git)、编辑器保存文件、视频录制
// 当需要 持久化保存数据 的时候，应想到文件写入