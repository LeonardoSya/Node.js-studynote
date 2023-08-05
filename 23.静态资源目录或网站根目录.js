//  http服务在哪个文件夹中寻找 静态资源，那个文件夹就是 静态资源目录， 也称之为 网站根目录

// vscode中使用 live-server 访问html时，它启动的服务网站根目录就是当前html所在的根目录，即 Node.js

const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, 'http://127.0.0.1')
    response.setHeader('content-type', 'text/html;charset=utf-8')

    // 拼接文件路径
    // let filePath = __dirname + '/19.http响应练习' + pathname     // 19.http响应练习文件夹  就是当前服务的网站根目录(或静态资源目录)
    
    // 单独提取出网站根目录  这样以后就可以根据需求 调整网站的根目录
    const root = __dirname + '/19.http响应练习'
    const filePath = root + pathname

    // 读取文件  选取fs异步api
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('content-type', 'text/html;charset=utf-8')
            response.statusCode = 500
            response.end('文件读取失败')
            return
        }
        response.end(data)
    })
})


server.listen(9000, () => {
    console.log('服务已启动')
})