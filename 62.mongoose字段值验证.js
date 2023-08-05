/*
字段验证就是对文档属性的值校验，检查通过则允许往数据库里插入，如果值不合法则报错
Mongoose有内建验证器，可以对字段值进行验证
*/

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    const BookSchema = new mongoose.Schema({   // Schema 模式(结构) 
        // 1. 必填项
        //  属性值类型配置为对象类型
        name: {
            type: String,
            required: true   //  required:true 表明该属性必须不为空
        },
        // 2. 默认值
        author: {
            type: String,
            default: '匿名'   //  默认值，也就是说如果文档没有author属性，则为'匿名'
        },
        // 3.枚举值
        gender: {
            type: String,
            enum: ['男', '女'],   // 设置的值必须是数组中的
        },
        // 4.唯一的
        name: {
            type: String,
            required: true,   //  required:true 表明该属性必须不为空
            unique: true,   // 给该属性加了唯一索引  unique:true 表明该属性必须唯一
            // 注意，unique需要 重建集合 才能有效果
        },
        price: Number,
        desc: String,
        img: String
    });
    const BookModel = mongoose.model('books', BookSchema); // 参数1：集合名称  参数2：要操作的结构对象
    BookModel.create({
        name: 'Node.js',
        author: 'Michael Chen',
        price: 19.9,
        gender: '男',
        desc: 'Node.js是一款JavaScript框架',
        is_hot: true,
    }).then((data) => {
        console.log(data);
    })
});

mongoose.connection.once('error', () => {
    console.log('数据库连接失败');
})
mongoose.connection.once('close', () => {
    console.log('数据库连接关闭');
})