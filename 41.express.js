
/*
express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架，官方网址：https://www.expressjs.
com.cn/
简单来说，express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用（HTTP 服务）

*/


// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建一个路由
// 如果请求方法是get且请求路径是/home 则执行回调函数为浏览器响应结果
app.get('/home', (req, res) => {   // req 对请求报文的一个封装对象  res 对响应报文的一个封装对象
    res.end('hello express')
})

// 4. 监听端口 启动服务
app.listen(8080, () => {
    console.log('服务已启动, 端口8080正在监听中...');
})