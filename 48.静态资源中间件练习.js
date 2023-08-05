// 需求：局域网内可以访问某个我写好的网页

const express = require('express')
const app = express()
app.use(express.static(__dirname + '/19.http响应练习'))
// app.get('/index.html', (req, res) => {

//     res.send('')
// })
app.listen(3000, () => {
    console.log('3000端口启动');
})