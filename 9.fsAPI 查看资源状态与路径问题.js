// // 六、查看资源状态
// fs.stat(path[, options], callback)
// fs.statSync(path[, options])
const fs = require('fs')
fs.stat('./1.Node.js导读.md', (err, data) => {
    if(err)throw err
    console.log(data)
    console.log(data.isFile())    // true  isFile() 检查目标资源是否是一个文件
    console.log(data.isDirectory())    // false   isDirectory() 检查目标资源是否是一个文件夹
})
/* Stats {
  dev: 1510393017,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 1407374883553773,
  size: 220,                                  size 文件大小
  blocks: 0,
  atimeMs: 1681125662164.6646,                
  mtimeMs: 1681125661687.1128,                
  ctimeMs: 1681125661687.1128,
  birthtimeMs: 1681095159890.9956,
  atime: 2023-04-10T11:21:02.165Z,            atime 最后的访问时间
  mtime: 2023-04-10T11:21:01.687Z,            mtime 最后的修改时间
  ctime: 2023-04-10T11:21:01.687Z,            ctime 最后修改文件状态的时间
  birthtime: 2023-04-10T02:52:39.891Z         birthtime 创建时间
} */


// 路径   分为相对路径和绝对路径(D:/xxx/xxx...)
// 相对路径的参照目录是 命令行的工作目录   也就是说当命令行工作目录发生改变时，程序对相对路径的解释也不同  
// 相对路径Bug的解决方法:
console.log(__dirname)   //  这个’全局变量‘保存了 所在文件的所在目录的绝对路径     //  D:\桌面\Node.js
// 因此我们对相对路径代码进行更进
const fs = require('fs')
const path = require('path')
fs.writeFileSync(path.resolve(__dirname, '0.test.js'), '__dirname test')    // 注意这里path写成 '/' 而不是 './'

