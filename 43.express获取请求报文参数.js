// express框架封装了一些api来方便获取请求报文中的数据 并且兼容原生http模块的获取方式

const express = require('express')
const app = express()

app.get('/request', (req, res) => {
    // 原生操作
    // console.log(req.method)
    // console.log(req.url)     //  /request
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // express操作
    console.log(req.path)    // /request
    console.log(req.query)      // { a: '200', b: '100' }   querystring
    console.log(req.ip)     // s ::ffff:127.0.0.1
    // 获取请求头
    console.log(req.get('host'))    // 192.168.3.198:9000   req.get()获取请求头  ()内可指定某个属性





    res.end('hello express')
})


app.listen(9000, () => {
    console.log('9000监听中');
})