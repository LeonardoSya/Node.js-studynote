// 三、文件移动与重命名
// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)
const fs = require('fs')
// fs.rename('0.test.js', '课件/0.test.js', (err) => {
//     if (err) throw err
//     console.log('success')
// })
fs.renameSync('19.19_index.html', './19.http响应练习/19.19_index.html')

// 四、文件删除
//  fs.unlink(path, callback)
//  fs.unlinkSync(path)
// const fs = require('fs')
// fs.unlink('0.asda', (err) => {
//     if (err) throw err
//     console.log('success')
// })
// fs.unlinkSync('xxxx')