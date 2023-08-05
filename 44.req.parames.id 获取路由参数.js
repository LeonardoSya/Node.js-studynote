//  路由参数指的是 URL 路径中的参数（数据）

const express = require('express')
const app = express()


app.get('/:id.html', (req, res) => {     //  /:id.html  对id做一个通配
    // 获取url路由参数
    console.log(req.params.id)        //  params是req请求对象上的一个属性 用来存储所有参数 id是路由参数中的一个    // h5432w
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end('商品详情')
})
app.listen(9000, () => {
    console.log('9000 监听中');
})