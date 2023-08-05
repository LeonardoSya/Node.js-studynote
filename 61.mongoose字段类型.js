/*
String    字符串
Number    数字
Boolean   布尔值
Array     数组，也可以使用 [] 来标识
Date      日期
Buffer    Buffer 对象
Mixed     任意类型，需要使用 mongoose.Schema.Types.Mixed 指定
ObjectId   对象 ID，需要使用 mongoose.Schema.Types.ObjectId 指定
Decimal128   高精度数字，需要使用 mongoose.Schema.Types.Decimal128 指定
*/

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
mongoose.connection.once('open', () => {
    // 创建文档结构对象
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,   // 是不是热门书籍
        tags: Array,
        put_time: Date,
        test: mongoose.Schema.Types.Mixed,      // Mixed指定的类型是任意的
        test2: mongoose.Schema.Types.ObjectId,   // 一般用文档ID来设外键 让多个文档之间产生关联
        test3: mongoose.Schema.Types.Decimal128,   // 高精度数字类型

    })
    // 创建模型对象
    const BookModel = mongoose.model('Books', BookSchema);
    // 新增
    BookModel.create({
        name: 'Node.js',
        author: 'Michael Chan',
        price: 19.9,
        is_hot: true,
        tags: ['JS', '后端框架', '网络'],
        put_time: new Date(),
    }).then((data) => {
        console.log(data)
    })
})