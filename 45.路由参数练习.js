// 需求 根据路由参数响应歌手的信息
const express = require('express')
const app = express()
// 导入json文件
const { signers } = require('./45.signers.json')


app.get('/signer/:id.html', (req, res) => {
    // 获取路由参数
    const { id } = req.params
    // 在数组中寻找对应id的数据
    const result = signers.find(item => {
        if (item.id === Number(id)) {    // 如果查询的json文件里id与路由参数id匹配，则返回对应id所在的对象 否则undefined
            return true
        }
    })
    // console.log(result)
    
    if (!result) {
        res.statusCode = 404
        res.end('<h1>404 Not Found</h1>')
        return
    }
    res.end(`<!DOCTYPE html>
             <html lang="en">
             
             <head>
                 <meta charset="UTF-8">
                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>Document</title>
             </head>
             
             <body>
                 <h2>${result.signer_name}</h2>
                 <h2>${result.signer_id}</h2>
                 
             </body>
             
             </html>`)
})


app.listen(9000, () => {
    console.log('9000监听中');
})