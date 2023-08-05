// 复制 0.test.js

// 方式1  readFileSync
const fs = require('fs')
const process = require('process')

const data = fs.readFileSync('./0.test.js')
fs.writeFile('./1.test.js', data, err => {
    if (err) throw err
    console.log('success')
})
console.log(process.memoryUsage())   // memoryUsage 内存使用量
//  rss: 31674368     31674368 byte --> 30mb


// // 方式2 流式操作
const fs = require('fs')
const process = require('process')
// 创建读取流对象
const rs = fs.createReadStream('./0.test.js')
// 创建写入流对象
const ws = fs.createWriteStream('./1.test.js')  // 追加流式写入
// 为读取流绑定data事件
rs.on('data', chunk => {
    ws.write(chunk)
})
rs.on('end', () => {
    console.log(process.memoryUsage())     //  rss: 31821824 byte  --> 30mb  如果是比较大的复制 流式操作的内存占用量会小于一般读写操作
    console.log('success')
})

// 建议使用方式2流式操作 因为流式读取与写入 是取一点写一点 比较节省内存空间   但实际上流式读取略微快于流式写入，所以实际状态下内存消耗略微大于64KB

// 用process查看代码内存占用量
// process.memoryUsage


// 当然，也可以采取这种复制办法
// 3.
const fs = require('fs')
const rs1 = fs.createReadStream('0.test.js')
const ws1 = fs.createWriteStream('1.test.js')
rs1.pipe(ws1)  // 意思是 把这个数据取出来读取完之后交给写入流  pipe管道   不推荐用