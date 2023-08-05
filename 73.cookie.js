/*
    http是一种无状态协议，它没法区分多次的请求是否来自于同一个客户端，无法区分用户
    常见的会话控制：cookie session token

1. cookie
    cookie是http服务器发送到用户浏览器并保存在本地的一小块数据
    cookie是保存在浏览器的一小块数据，cookie是按照域名划分保存的

    浏览器向服务器发送请求时，会自动将当前域名下可用的cookie设置在请求头中，然后传递给服务器
    这个请求头也叫cookie，所以将cookie理解为一个http请求
*/

// express框架中设置cookie
// 导入express
const express = require('express');
// 创建应用对象
const app = express();

// 导入用于解析cookie的包
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 创建路由规则
app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'zyyy');   //  会在浏览器关闭时销毁
    res.cookie('name', 'zyyy', { maxAge: 3000000 });  // 设置cookie生命周期 单位是毫秒 不会在浏览器关闭时销毁
    res.cookie('theme', 'blue');
    res.send('home');
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('删除成功');
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send(`早上好, ${req.cookies.name}`);    
})


// 启动服务
app.listen(3000);

