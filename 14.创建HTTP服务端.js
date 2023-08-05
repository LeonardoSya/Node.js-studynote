// 1. 导入http模块
const http = require('http')
// 2. 创建服务对象
// 当服务在接收到http请求的时候，执行回调函数
const server = http.createServer((request, response) => {    // 创建服务对象接收两个形参 request请求 response响应 
    // response.end()   设置响应体并结束这个响应
    // response.end('hello HTTP Server')

    // 解决响应内容中文乱码
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好')
})
// 3. 监听端口，启动服务 
server.listen(9000, () => {   // 服务启动成功之后，回调函数执行
    console.log('服务已启动')
})  //  9000这个端口已经被node.js脚本占用了，将来只要有程序往我的电脑的9000端口发送http请求，2.中创建服务对象的回调函数就会执行

/*
http服务的注意事项
1. 命令行 ctrl + c 停止服务
2. 当服务启动后，更新代码 必须重启服务才能生效
3. 响应内容中文乱码的解决方法：
    response.setHeader('content-type', 'text/html;charset=utf-8')
4. 端口号被占用  Error: listen EADDRINUSE: address already in use :::9000
    1) 关闭当前正在运行监听端口的服务(使用较多)
    2) 修改其他端口号
5. HTTP协议默认端口是80， HTTP服务开发常用端口有3000， 8080， 8090， 9000等
6. HTTPS协议默认端口是443
*/