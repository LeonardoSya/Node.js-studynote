//  搭建http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果，并且点击单元格能高亮显示

const http = require('http')
// 读取文件内容
const fs = require('fs')
const server = http.createServer((request, response) => {
    // response.end(html)   // end 的参数可以是字符串也可以是buffer

    const { pathname } = new URL(request.url, 'http://127.0.0.1')
    if (pathname === '/') {
        const html = fs.readFileSync(__dirname + '/index.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        const css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        const js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404
        response.end('404 Not Found')
    }
    // switch (pathname) {
    //     case '/ HTTP/1.1':
    //         response.end(html)
    //         break;
    //     case '/index.css HTTP/1.1':
    //         response.end(css)
    //         break;
    //     case '/index.js HTTP/1.1':
    //         response.end(js)
    //         break;
    //     default:
    //         response.end('Not Found')
    //         break;
    // }
})
server.listen(9000, () => {
    console.log('服务已启动')
})