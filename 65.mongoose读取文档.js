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

    // 1. 读取单条  findOne()
    BookModel.findOne({ author: '余华' }).then((data) => {
        console.log(data);
        /*
            {
              _id: new ObjectId("6455bae2bed74c9c34047acb"),
              name: '活着',
              author: '余华',
              price: 10,
              is_hot: true,
              __v: 0
            }
        */
    })

    // 2. 根据id获取文档   findById()
    BookModel.findById('6455c0ed4b6bde4b33ae5d14').then((data) => {
        console.log(data);
    });
    /*
        {
             _id: new ObjectId("6455c0ed4b6bde4b33ae5d14"),
             name: '长安的荔枝',
             author: '马伯庸',
             price: 45,
             is_hot: true,
             __v: 0
        }
    */

    //  3. 批量获取
    BookModel.find({ author: '余华' }).then((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    })

    //  4. 读取所有文档
    BookModel.find().then((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    })

});

mongoose.connection.once('error', () => {
    console.log('连接失败');
});
mongoose.connection.once('close', () => {
    console.log('连接关闭');
});
