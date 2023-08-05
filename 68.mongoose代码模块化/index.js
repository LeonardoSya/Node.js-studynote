// 导入db文件 和 mongoose
const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel');
// 调用这个函数
db(() => {

    BookModel.find()
        .select({ name: 1, author: 1, _id: 0 })
        .exec()
        .then((data) => {
            console.log(data);
        })

    console.log("连接成功");

});
