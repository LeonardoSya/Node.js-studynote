
// 两种方法都能用

// 第一种方法 获取请求路径与查询字符串
const http = require('http')
// 导入url模块
const url = require('url')

const server = http.createServer((request, response) => {
    // 解析request.url
    // console.log(request.url)    //  /search?keyword=h5  包含了路径和查询字符串
    const res = url.parse(request.url, true)  // 解析内容   // 这个参数true 能够使查询字符串query 转换成对象形式    
    // 获取请求路径
    const pathname = res.pathname
    console.log(pathname)   //  /search
    // 获取querystring
    const keyword = res.query.keyword  // 获取request.url对象里的query对象里的keyword的值
    console.log(keyword)   //  h5

    response.end('ok')
})
server.listen(9000, ()=> {
    console.log('程序已启动')

})


//  第二种方法 获取请求路径与查询字符串
const http = require('http')
const serverr = http.createServer((request, response) => {
    // 实例化一个url对象
    const url = new URL(request.url, 'http://127.0.0.1')
    // 输出路径
    console.log(url.pathname)    // /search
    // 输出keyword查询字符串
    console.log(url.searchParams.get('keyword'))   // h5
    

    response.end('ok')
})
serverr.listen(9000, () => {
    console.log('服务已启动')

})