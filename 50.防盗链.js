// 防盗链：防止外部网站盗用本网站资源
const express = require('express')
const app = express()

// 声明中间件
app.use((req, res, next) => {
    // 检测请求头的referer是否为127.0.0.1
    const referer = req.get('referer')
    // console.log(referer)   //   http://127.0.0.1:3000/index.html
    // 实例化 来提取url
    if (referer) {
        const url = new URL(referer)
        const hostname = url.hostname
        if (hostname !== '127.0.0.1') {
            res.status(404).send('<h1>401</h1>')
            return    //  注意要写return 让代码别继续执行了
        }
    }
    next()
})
app.use(express.static(__dirname + '/19.http响应练习'))
app.listen(3000, () => {
    console.log('Server is running on 3000');
})
