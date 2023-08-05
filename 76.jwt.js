/*
JWT(Json Web Token)是目前最流行的跨域认证解决方案，可用于基于token的身份验证
JWT使token生成与校验更规范
可以使用jsonwebtoken包来操作token

*/

const jwt = require('jsonwebtoken');

// 生成token
// const token = jwt.sign(用户数据, 加密字符串, 配置对象);
let token = jwt.sign({
    username: 'zyyy'
}, 'jiamizifuchuan1234', {
    expiresIn: 60,  // token生命周期 单位秒
})

console.log(token);   //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inp5eXkiLCJpYXQiOjE2ODQ4MTU5NDcsImV4cCI6MTY4NDgxNjAwN30.j7u2VNYYV2re0_kkap9hIylmLHaP7dXM0j209YDmS_g
// let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inp5eXkiLCJpYXQiOjE2ODQ4MTU5NDcsImV4cCI6MTY4NDgxNjAwN30.j7u2VNYYV2re0_kkap9hIylmLHaP7dXM0j209YDmS_g';
let t = `${token}`;

// 校验token
jwt.verify(t, 'jiamizifuchuan1234', (err, data) => {
    if (err) {
        console.log('校验失败');
        return
    }
    console.log(data);   // { username: 'zyyy', iat: 1684816202, exp: 1684816262 }  iat:生成时间  exp:过期时间
})