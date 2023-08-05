/*
路由确定了应用程序如何响应客户端对特定端点的请求

换句话说，路由决定浏览器发来的请求 由哪个回调函数去处理

路由由请求方法、路径和回调函数组成

*/

const express = require('express')
const app = express()

// 每个网站的首页几乎都是由这样一个路由响应
// 匹配get或post方法
app.get('/', (req, res) => {
    res.end('home')
})

app.post('/login', (req, res) => {
    res.end('login')
})
// 匹配所有方法
app.all('/test', (req, res) => {   // 随意请求方法都可以执行函数
    res.end('post/get')
})
// 404响应
app.all('*', (req, res) => {    // * 通配符  这个路由规则可以进行404响应
    res.end('<h1>404 Not Found</h1>')
})
// 当时我们判断方法是用ifelse的 express帮我们封装了判断请求方法对应的回调函数 使用起来比较方便


app.listen(8090, () => {
    console.log('8090监听中');
})