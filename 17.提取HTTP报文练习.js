// 导入http模块
const http = require('http')
const { url } = require('inspector')
// 创建服务对象   功能代码都要放在这个回调函数中
const server = http.createServer((request, response) => {
    // 判断请求的方法 并判断url路径是否匹配需求
    // 获取请求的方法
    // const method = request.method  这样写太麻烦了 我们可以用解构赋值的写法
    const { method } = request
    // 获取请求的url路径
    // const pathname = new URL(request.url, 'http://127.0.0.1')  这里也可以对象解构 因为 new URL 的实例对象包含pathname属性
    const { pathname } = new URL(request.url, 'http://127.0.0.1')
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 这样就能获取请求方法和请求路径了
    // console.log(method)   // GET
    // console.log(pathname)   // /login

    // 判断请求方法和请求路径是否匹配
    if (method === 'GET' && pathname === '/login') {
        // 登录的情况
        response.end('您正在访问登录页面')
        console.log(method)
        console.log(pathname)
    } else if (method === 'GET' && pathname === '/reg') {
        // 注册的情况
        response.end('您正在访问注册页面')
        console.log(method)
        console.log(pathname)
    } else {
        response.end('Not Found')
        console.log(method)
        console.log(pathname)
    }


})
// 监听端口 启动服务
server.listen(9000, () => {
    console.log('服务已启动, 端口9000监听中')
})







// // 引入http模块
// const http = require('http')
// // 建立服务
// const server = http.createServer((request, response) => {
//     const { url, method } = request   // 对象的解构赋值
//     console.log(url)
//     console.log(method)
//     // 设置响应头信息nod
//     // 解决中文乱码
//     response.setHeader('Content-Type', 'text/html;charset=utf-8')
//     if (url == '/register' && method == 'GET') {
//         response.end('login page')
//     } else if (url == '/login' && method == 'GET') {
//         response.end('register page')
//     } else {
//         response.end('<h1>404 Not Found</h1>')
//     }
// })
// // 监听端口
// server.listen(8000, ()=> {
//     console.log('The service is in startup')
// })

