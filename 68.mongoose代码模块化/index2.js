// 创建一个新的movie集合

const db = require('./db/db');
const MovieModel = require('./models/MovieModel');
db(() => {
    // MovieModel.create({ title: '让子弹飞', director: '姜文' }).then((data) => {
    //     console.log(data);
    // })
    MovieModel.find({}).select({ title: 1, director: 1, _id: 0 }).then((data) => {
        console.log(data);
    });
    console.log('操作成功');
});