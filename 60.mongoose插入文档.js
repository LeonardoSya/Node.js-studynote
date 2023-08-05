const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 二. mongoose插入文档
// 连接成功后，open回调函数会被调用，所有执行代码都在open回调函数里写
mongoose.connection.once('open', () => {
    // 5. 创建文档结构对象
    // 文档结构对象用来设置 集合中文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({   // Schema 模式(结构) 
        name: String,
        author: String,
        price: Number,
        desc: String,
        img: String
    });
    // 6. 创建模型对象
    // 模型对象是 对文档操作的封装对象 它能够完成对文档的增删改查等功能
    const BookModel = mongoose.model('books', BookSchema); // 参数1：集合名称  参数2：要操作的结构对象
    // 7. 新增
    BookModel.create({
        name: 'Node.js',
        author: 'Michael Chen',
        price: 19.9,
        is_hot: true,
    }).then((data) => {
        console.log(data);
    })
    // // 8. 关闭数据库连接
    // setTimeout(() => {
    //     mongoose.disconnect()
    // }, 2000);
    // 项目运行中不会添加上面这块代码 保持常连接
});



mongoose.connection.once('error', () => {
    console.log('数据库连接失败');
})
mongoose.connection.once('close', () => {
    console.log('数据库连接关闭');
})