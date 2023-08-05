const http = require('http')
const server = http.createServer((request, response) => {
    // 提取请求头
    // 获取请求方法
    console.log(request.method)   //  GET
    // // 获取请求的url  只返回url中的路径与querystring
    console.log(request.url)   //  /search?keyword=h5&num=1
    // // 获取http协议版本号(用的较少)
    console.log(request.httpVersion)   // 1.1
    // // 获取请求头
    console.log(request.headers)   // { } 返回一个对象，里面包含了请求头的全部内容
    console.log(request.headers.host)  // 获取某个请求头的单独键值

    // 提取请求体
    let body = ''
    request.on('data', chunk => {
        body += chunk
    })
    request.on('end', () => {
        console.log(body)    // username=wadsd&password=wadwdsad
        response.end('hello HTTP')
    })   // 当把可读流事件全部读完 就会触发end事件

})
server.listen(9000, () => {
    console.log('服务已启动')
})

/* 
注意事项:
1. request.url 只能获取路径以及querystring，无法获取url中的域名及协议内容
2. request.headers 将请求信息转化成一个对象，并将属性名都转化成小写
3. 关于路径: 如果访问网站的时候，只填写了IP地址或域名信息，此时请求的路径为 /
4. 关于favicon.ico 这是浏览器自动发送的请求


*/