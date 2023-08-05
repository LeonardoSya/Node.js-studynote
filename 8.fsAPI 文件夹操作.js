// 五、文件夹操作

// 5.1 mkdir创建文件夹  dir -> directory 目录
// 异步创建文件夹
const fs = require('fs')
fs.mkdir('./课件/a.js', err => {
    if (err) throw err
    console.log('success')
})
// 递归异步创建文件夹
fs.mkdir('./课件/c.js/b.js', { recursive: true }, err => {    // recursive 递归 该配置文件表明我要递归创建了
    if (err) throw err
    console.log('success')
})
// 递归同步创建文件夹
fs.mkdirSync('xxxx', { recursive: true })

// 5.2 readdir 读取文件夹
const fs = require('fs')
fs.readdir('./课件', (err, data) => {
    if (err) throw err
    console.log(data)  // 返回一个Array 数组元素是目标文件夹的名称
})

// 5.3 fs.rm 删除文件夹   rm -> remove  注意 rmdir将在后续版本被移除 所以推荐使用rm
const fs = require('fs')
fs.rm('./课件/c.js/b.js', { recursive: true }, err => {    // 递归删除
    if (err) throw err
    console.log('success')

})
