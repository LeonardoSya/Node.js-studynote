const express = require('express')
const app = express()
const homeRouter = require('./homeRouter')
const { get } = require('lodash')
app.use(homeRouter)  // 设置全局中间件

app.get('/home', (req, res) => {  // 显示优先级低于homeRouter 因此不显示
    console.log('qiantai')
    res.send('qiantai')
})
app.listen(3000, () => {
    console.log('Server is running on 3000');
})

// 路由模块化，更利于管理路由节省代码，更利于多余协同开发避免冲突