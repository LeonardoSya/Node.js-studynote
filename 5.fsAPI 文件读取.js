// 二、文件读取   
// 文件读取是通过程序从文件中取出其中的数据
// 2.1 readFile 异步读取  
// fs.readFile(path[, options], callback)  path文件路径 options选项配置   返回值undefined
const fs = require('fs')
fs.readFile('0.test.js', (err, data) => {   //  形参err用来接收错误信息 形参data用来接收读取的文件内容
    if (err) throw err
    console.log(data.toString())     // 读取内容是一个buffer 因此可以用toString()转成utf-8的字符串
})
fs.readFile('0.test.js', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)  // 返回 异步读取
})

// 2.2 readFileSync 同步读取
// fs.readFileSync(path[, options])   返回值 string | buffer
const data = fs.readFileSync('0.test.js')   //    <Buffer e5 bc 82 e6 ad a5 e8 af bb e5 8f 96>
const data2 = fs.readFileSync('0.test.js', 'utf-8')   // 异步读取


// 2.3 createReadStream 流式读取
// fs.createReadStream(path[], options])    返回值 object
// 创建读取流对象
const fs = require('fs')
const rs = fs.createReadStream('一个比较大的数据')
// 每次取出64k数据后就执行一次data回调 
rs.on('data', chunk => {  // on()方法绑定data事件  形参chunk的意思是块/大块   因为同步和异步读取是一整个读 流式读取是一块一块读
    console.log(chunk)
    console.log(chunk.length)  // 65536   65536字节-->64KB  说明流式读取每次读出64KB的大小
})
// 读取完毕后 执行end回调  end是一个可选事件
rs.on('end', () => {
    console.log('读取完成')
})


// 2.4 读取文件应用场景
// 电脑开机 程序运行 编辑器打开文件 查看图片 播放视频 播放音乐 git查看日志 上传文件 查看聊天记录



