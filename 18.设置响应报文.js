/*
response.statusCode  设置响应状态码
response.statusMessage  设置响应状态描述 (使用非常少)
response.setHeader('头名', '头值')  设置响应头信息
response.write('xx')  response.end('xx')   设置响应体
*/

const http = require('http')
const server = http.createServer((request, response) => {
    // 1.  设置相应状态码
    response.statusCode = 203

    // 2.  设置响应状态描述
    response.statusMessage = 'love you'
    // 设置响应状态描述用的非常少 因为绝大多数情况响应状态描述都会 自动匹配 状态码 并一一对应
    
    // 3,  设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('Server', 'Node.js')   // Server响应头 用来标识服务端的名字 名字是自定义的
    response.setHeader('myHeader', 'test')  // 自定义响应头
    response.setHeader('test', ['a', 'b', 'c'])   //  设置多个同名响应头

    // 4.  设置响应体
    response.write('love ')
    response.write('love ')  // write可以多次调用响应体
    // 实际中 如果已经用 write 了 就不再在end里设置响应体了
    // response.end()

    // 注意 每一个请求在执行回调函数的过程中 必须有一个且只能有一个 response.end() 方法    否则会报错: write after end


    response.end('response')
})
server.listen(9000, () => {
    console.log('服务已启动')
})