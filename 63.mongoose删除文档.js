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

    // 批量删除数据   删除单条数据就是改成deleteOne 其他不变
    BookModel.deleteMany({ is_hot: false }).then((data) => {
        console.log(data);
    })
});

mongoose.connection.once('error', () => {
    console.log('连接失败');
});
mongoose.connection.once('close', () => {
    console.log('连接关闭');
});
