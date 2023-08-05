/**
 * 
 * @param {*} success  数据库连接成功的回调
 * @param {*} error    数据库连接失败的回调
 */
module.exports = function (success, error) {
    // 判断error 为其设置默认值
    if (typeof error === 'function') {
        error = () => {
            console.log("连接失败");
        }
    }
    const mongoose = require('mongoose');
    // 导入配置文件
    const { DBHOST, DBPORT, DBNAME } = require('../config/config');
    mongoose.set('strictQuery', true);
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
    mongoose.connection.once('open', () => {
        success();
    });
    mongoose.connection.once('error', () => {
        error();
    });
    mongoose.connection.once('close', () => {
        console.log("连接关闭");
    });
}
