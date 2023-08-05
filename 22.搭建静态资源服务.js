/*
  创建一个http服务，端口9000 满足以下需求：
  GET /             响应index.html 的文件内容
  GET /index.css    响应index.css 的文件内容
  GET /index.js     响应index.js 的文件内容
*/

const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  response.setHeader('content-type', 'text/html;charset=utf-8')

  // 拼接文件路径
  let filePath = __dirname + '/19.http响应练习' + pathname
  // 读取文件  选取fs异步api
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 500
      response.end('文件读取失败')
      return
    }
    response.end(data)
  })
})


server.listen(9000, () => {
  console.log('服务已启动')
})
