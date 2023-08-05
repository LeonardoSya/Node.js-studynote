/*
1. 运算符
    在mongodb不能使用>< >=<= !==等运算符，需要使用替代符号
    > : $gt    gt greater than
    < : $lt    lt less than
    >= : $gte
    <= : $lte
    !== : $ne
    

2. 逻辑运算
    $or 逻辑或      db.students.find({$or:[{age:18},{age:24}]});
    $and 逻辑与     db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});


3. 正则匹配
条件中可以直接使用js的正则语法，通过正则可以进行模糊查询
db.students.find({name:/imissyou/});

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

    // 1. 运算符
    // 查找价格小于20的书
    // BookModel.find({ price: { $lt: 20 } }).then((data) => {
    //     console.log(data)
    // })

    // 2. 逻辑运算
    // 逻辑或
    // BookModel.find({$or: [{author: '曹雪芹'}, {author: '余华'}]}).then((data) => {
    //     console.log(data)
    // })

    // 逻辑与 价格大于30且小于70的书
    // BookModel.find({ $and: [{ price: { $gt: 30 } }, { price: { $lt: 70 } }] }).then((data) => {
    //     console.log(data)
    // })

    // 3. 正则匹配
    // 检索出书名带“三”的书籍
    BookModel.find({ name: /三/ }).then((data) => {
        console.log(data)
    })
});

mongoose.connection.once('error', () => {
    console.log('连接失败');
});
mongoose.connection.once('close', () => {
    console.log('连接关闭');
});
