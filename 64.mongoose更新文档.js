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

    // 更新单条文档
    BookModel.updateOne({ name: '红楼梦' }, { price: 9.9 }).then((data) => {
        console.log(data);
        /*返回
        {
            acknowledged: true,
            modifiedCount: 1,   修改文档的数量为1
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1
        }
        */
    })
    // 批量更新 updateMany 其他一样
    BookModel.updateMany({ author: '余华' }, { is_hot: true }).then((data) => {
        console.log(data);
    })


});

mongoose.connection.once('error', () => {
    console.log('连接失败');
});
mongoose.connection.once('close', () => {
    console.log('连接关闭');
});
