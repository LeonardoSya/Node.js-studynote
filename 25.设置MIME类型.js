/*
MIME类型
媒体类型(Multipurpose Internet Mail Extensions)或资源类型 是一种标准 用来表示文档、文件或字节流的性质和格式
mime类型结构 : [type]/[subType]    [主类型]/[子类型]
例如： text/html text/css image/png application/json

http服务可以设置响应头 Content-Type 来表明响应体的mime类型 浏览器会根据该类型决定如何处理资源
对于未知的资源类型 可以选择 application/octet-stream 类型 浏览器在遇到该类型时 会对响应体的内容进行独立存储 也就是我们常见的 [下载] 效果

*/


const http = require('http')
const fs = require('fs')
const path = require('path')
// 声明一个变量来设置mime类型
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, 'http://127.0.0.1')

    let filePath = __dirname + '/19.http响应练习' + pathname
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500
            response.end('文件读取失败')
            return
        }

        // 在读取文件之后再去设置响应头
        // 1. 获取文件后缀名
        const ext = path.extname(filePath).slice(1)   // 顺便把 . 截掉
        // 2. 获取对应的类型
        const type = mimes[ext]  //  获取mimes对象中的名为ext的下标 所对应的类型
        if (!type) {
            type = 'application/octet-stream'
        }
        if (ext === 'html') {
            response.setHeader('content-type', type + ';charset=utf-8')    //    ;charset=utf-8 解决html中乱码问题  
        } else {
            response.setHeader('content-type', type)
        }
        //  设置响应头里的优先级 高于 html文件里的优先级

        response.end(data)
    })
})


server.listen(9000, () => {
    console.log('服务已启动')
})
