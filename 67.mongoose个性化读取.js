/*
1. 字段筛选
1要的字段   0不要的字段
BookModel.find().select({xxx: 1}).exec().then()

2. 数据排序
1升序 0倒序
BookModel.find().sort({xxx: 1}).exec().then()

3. 数据截断
skip(x)跨过x个   limit(x)截取x个
*/



const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
mongoose.connection.once('open', () => {
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    });
    let BookModel = mongoose.model('novel', BookSchema);

    // 1. 字段筛选  
    // 只要书名和作者 其他字段不要
    BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec().then((data) => {
        console.log(data);
    })

    // 2. 数据排序
    // 按照价格的升序排序 并且只要书名和价格
    BookModel.find().select({ name: 1, price: 1, _id: 0 }).sort({ price: 1 }).exec().then((data) => {
        console.log(data);
    })

    // 3. 数据的截取
    BookModel.find()
        .select({ name: 1, price: 1, _id: 0 })
        .sort({ price: 1 })
        .limit(3)
        .exec()
        .then((data) => {
            console.log(data)
        })    //   limit(3)  截取前三个文档
    BookModel.find()
        .select({ name: 1, price: 1, _id: 0 })
        .sort({ price: 1 })
        .skip(3).limit(3)
        .exec()
        .then((data) => {
            console.log(data)
        })    //   skip(3).limit(3)  截取4-6个文档(跳过前3个 skip(3) 然后再取3个)



});

mongoose.connection.once('error', () => {
    console.log('连接失败');
});
mongoose.connection.once('close', () => {
    console.log('连接关闭');
});
