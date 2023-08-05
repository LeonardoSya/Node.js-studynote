// express可以使用body-parser包处理请求体

// 需求： get /login显示表单网页  post /login获取表单中[用户名]和[密码]
const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()

// 下面是两个body-parser封装的提取请求体数据中间件函数
// 解析json格式请求体
const jsonParser = bodyParser.json()
// 解析querystring格式请求体
const urlencodedParsser = bodyParser.urlencoded({ extended: false })

app.get('/login', (req, res) => {
    // 响应html文件内容
    res.sendFile(__dirname + '/0.index.html')
})
app.post('/login', urlencodedParsser, (req, res) => {   // 执行中间件函数
    // 获取用户名和密码
    const { username, password } = req.body    //  当这个中间件函数执行完毕后，会往请求对象身上添加一个body属性    // [Object: null prototype] { username: 'leonardosya', password: '666' }
    fs.appendFile(__dirname + '/49.access.log', `${username} ${password}\r\n`, err => {
        if (err) throw err
    })
    res.send('登录成功 密码已窃取')
})
app.listen(3000, () => {
    console.log('server is running');
})
