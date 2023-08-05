//  Mongoose是一个对象文档模型库 方便使用代码操作mongodb数据库

//  一. mongoose连接数据库
// 1. require('mongoose')
const mongoose = require('mongoose');
// 2. 设置 strictQuery 为 true
mongoose.set('strictQuery', true);
// 3. 连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')  // mongodb默认端口是27017
// 4. 设置回调
// mongoose.connection.once('open', () => {   // once 事件回调函数只执行一次
//     console.log('数据库连接成功');
// });
mongoose.connection.once('open', ()=> {
    console.log('数据库连接成功');
});
mongoose.connection.once('error', () => {
    console.log('数据库连接失败');
});
mongoose.connection.once('close', () => {
    console.log('数据库连接关闭');
});
// 关闭连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000);


