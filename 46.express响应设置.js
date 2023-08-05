// express框架封装了一些api来方便给客户端响应数据 并且兼容原生http模块的获取方式
const express = require('express')
const path = require('path')
const app = express()
app.get('/response', (req, res) => {
    // // 原生响应
    // res.statusCode = 200
    // res.statusMessage = 'love'
    // res.setHeader('xxx', 'yyy')
    // res.write('hello')
    // res.end('hello')

    // express响应
    res.status(203)
    res.set('aaa', 'bbb')
    res.send('你好 express')   // send方法会在响应头自动添加字符集 

    // express支持链式写法
    res.status(202).set('aaa', 'bbb').send('你好 express')

    // express其他响应
    // 重定向响应 (跳转)
    res.redirect('http://www.csdn.com')  
    // 下载响应
    res.download(__dirname + '/package.json')
    // json响应
    res.json({     ///  浏览器会自动设置mime类型  Content-Type: application/json; charset=utf-8
        name:'sgg',
        slogon:'让天下没有难学的技术'
    })
    // 响应文件内容
    res.sendFile(path.resolve(__dirname, '0.test.html'))
    

}) 
app.listen(9000, () => {
    console.log('9000监听中');
})
