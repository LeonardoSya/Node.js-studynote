
// 导入mongoose包
const mongoose = require('mongoose');
// 创建文档结构对象 并设置文档属性及值类型
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
});
let BookModel = mongoose.model('novel', BookSchema);

// 暴露模型对象
module.exports = BookModel;