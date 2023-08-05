/*
中间件 Middleware 本质是一个回调函数
中间件函数 可以像路由回调一样访问 request请求对象 和 response响应对象
这意味着我们在中间件函数里面 获取请求报文内容和设置响应结果

中间件的作用是 使用函数封装公共操作 简化代码

中间件分为：全局中间件、路由中间件
区别：
每个请求到达服务端后都会执行 全局中间件函数
请求到达服务端后满足某一个路由规则 它所对应的中间件函数才会执行
*/

// 1. 定义并应用全局中间件   每个请求到达服务端后都会执行全局中间件函数
app.use(function (req, res, next) {
    console.log('定义第一个中间件')

    // 执行next函数(当如果希望执行完中间件函数后，仍然继续执行路由中的回调函数，必须用next())
    next()
})
// express允许使用app.use()定义多个全局中间件
app.use(function (req, res, next) {
    console.log('定义第二个中间件')

    next()
})

/*
next()负责将控制权交给下一个中间件 
如果当前中间件没有终结请求 并且next()没有被调用 那么请求将会被挂起，后边定义的中间件将得不到被执行的机会
而如果我们定义的中间件终结了本次请求，那就不应该再调用next()
*/

// 2. 如果只需要对某一些路由进行功能封装，则就需要路由中间件
app.get('', fn, (req, res, next) => { })
// 把用来约束的中间件函数放在需要约束的路由路径后面


//  需求： 记录每个请求的url和ip
(function () {
    const express = require('express')
    const fs = require('fs')
    const { get } = require('http')
    const path = require('path')
    const app = express()

    app.use(function (req, res, next) {
        // 获取url和ip
        const { url, ip } = req
        // 将信息保存至文件中
        fs.appendFileSync(path.resolve(__dirname, './47.access.log'), `${url} ${ip}\r\n`)
        next()
    })

    app.get('/home', (req, res) => {
        res.send('前台首页')

    })

    app.get('/admin', (req, res) => {
        res.send('后台首页')
    })

    app.all('*', (req, res) => {
        res.status(404).send('<h1>404 Not Found</h1>')
    })

    app.listen(9000, () => {
        console.log('9000监听中');
    })
})()

// 需求 针对/admin和/setting的请求，要求url携带code=521参数 如未携带则提示暗号错误
(function () {
    const express = require('express')
    const app = express()
    app.get('/home', (req, res) => {
        res.send('前台首页')
    })

    // 后台设置 声明路由中间件
    const checkCodeMiddleware = (req, res, next) => {
        // 判断url中code参数是否为521
        if (req.query.code === '521') {  // 报文过来的内容都是字符串
            next()
        } else {
            res.send('暗号错误')
        }
    }

    app.get('/admin', checkCodeMiddleware, (req, res) => {
        res.send('后台首页')
    })
    app.get('/setting', checkCodeMiddleware, (req, res) => {
        res.send('设置页面')
    })

    app.all('*', (req, res) => {
        res.send('404')
    })

    app.listen(3000, () => {
        console.log('3000监听中');
    })
})()
// 我们经常使用路由中间件来校验用户身份(权限), 再把这个中间件函数放到需要授权的路由规则上，就可以实现对用户访问的管理

// 3. 静态资源中间件
// 静态资源是那些内容不经常发生改变的文件资源
// 静态资源目录/网页根目录：当浏览器把请求发送到服务端之后，服务端到哪个文件夹中找对应的文件，该文件夹就是静态资源目录/网站根目录
(function () {
    const express = require('express')
    const app = express()
    // 静态资源中间件的设置 设置网页根目录
    app.use(express.static(__dirname + '/19.http响应练习'))   // express.static()返回的是一个中间件函数 ()接收一个参数是静态资源文件夹路径  
    /*
    如果访问的内容经常变化，还是需要设置路由
    如果public目录下有index.html文件，并且也单独存在index.html的路由，则谁书写在前优先执行谁
    */
    app.get('/home', (req, res) => {
        res.send('首页')
    })
    app.listen(3000, () => {
        console.log('3000端口启动');
    })

    /*
    注意：
        index.html文件为默认打开的资源 也就是说，我不写路径，写127.0.0.1:3000 也会响应index.html的内容(默认打开资源) 也就是说它可以作为网站首页
        【 路由响应动态资源，静态资源中间件响应静态资源 】
        如果静态资源与路由规则同时匹配，则谁先匹配谁就响应(根据代码自上而下)
    */
})()


