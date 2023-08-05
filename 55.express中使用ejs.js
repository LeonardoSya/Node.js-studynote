const express = require('express')
const app = express()
const path = require('path')


// 1. 设置模板引擎
app.set('view engine', 'ejs')  // 设置express目前所使用的模板引擎为ejs   (ejs是nodejs模板引擎的一种，还有pug twing等包/模板引擎)
// 2. 设置模板文件的存放位置   模板文件是具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

app.get('/', (req, res) => {
    // 3. render响应
    const title = 'node.js爬虫'
    res.render('home', {title})
})

app.listen(3000, () => {
    console.log('Server is running on 3000');
})