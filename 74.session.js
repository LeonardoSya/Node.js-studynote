/*
session是保存在服务器端的一块数据 保存当前访问用户的相关信息
session能够实现会话控制，可以识别用户身份，快速获取当前用户的相关信息
session运行流程：
    填写账密校验身份，校验通过创建session信息，然后将session_id的值通过响应头返回给浏览器
    有了cookie，下次发送请求时会自动携带cookie，服务器通过cookie中的session_id的值确定用户身份

session和cookie的区别:
    1. 位置： 
        cookie 浏览器端
        session 服务器端
    2. 安全性：
        cookie是以明文的方式存放在客户端的，安全性相对较低
        session存放于服务器中，安全性相对较好
    3. 网络传输量：
        cookie设置内容过多会增大报文体积，会影响传输效率
        session数据存储在服务器，只是通过cookie传递id，所以不影响传输效率
    4. 存储限制：
        浏览器限制单个cookie保存的数据不能超过4k，且单个域名下的存储数量也有限制
        session数据存储在服务器中，因此没有存储数量限制

express-session代码操作:
*/
const express = require('express');
// 1. 安装包  npm i express-session connect-mongo
// 2. 引入 express - session  connect - mongo 
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// 3, 设置session中间件
app.use(session({
    name: 'sid',                                    //设置cookie的name，默认值是：connect.sid
    secret: 'sya',                                  //参与加密的字符串 (密钥/签名/加盐)，它会在原有加密基础之上和这个字符串拼起来去加密，目的是为了增加安全性，防止客户端恶意捏造
    saveUninitialized: false,                       //是否为每次请求都设置一个cookie用来存储session的id   一般当我们想对匿名用户做信息记录时true
    resave: true,                                   //是否在每次请求时重新保存session   退出登录问题 如果一直向服务端发请求就不容易退出登录，如果长期不操作会退出登录
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project'   //数据库的连接配置  
    }),
    cookie: {
        httpOnly: true,                                 // 开启后前端无法通过 JS 操作cookie
        maxAge: 1000 * 300                              // 控制 sessionID 的过期时间 (不仅能设置cookie也能设置sessionID过期时间) 单位毫秒
    },
}))

// 登录的路由规则
app.get('/login', (req, res) => {
    // username=admin&password=admin
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置session
        req.session.username = 'admin';
        req.session.uid = '22468';
        res.send(`上午好,${req.session.username}`);
    } else {
        res.send('登陆失败');
    }
})

// session 的读取
app.get('/cart', (req, res) => {
    // 检测session是否存在用户数据
    if (req.session.username) {
        res.send(`欢迎您, 尊贵的${req.session.username}先生`)
    } else {
        res.send('请先登录');
    }
})

// session 的销毁
app.get('/logout', (req, res) => {
    if (!req.session.username) {
        res.send('您还未登录')
    } else {
        req.session.destroy(() => {
            res.send('账号已登出');
        });
    }
})

app.listen(3000);