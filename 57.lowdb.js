const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// api功能
// 1. 初始化数据
db.defaults({ post: [], user: {} }).write()  // defaults默认  调用write()后数据就会同步到db.json中

// 2. 导入数据
db.get('posts').push({ id: 3, title: '天气不错' }).write()
// get()获取对象/数组  push()压入(追加)数据  write()执行写入操作
db.get('posts').unshift({ id: 2, title: '天气不错' }).write()  // unshift在前面插入数据

// 3. 获取数据
const result = db.get('posts').value()  // value()获取数据  返回值类型是Array
console.log(result)
// 3.1 获取单条数据
const returnIt = db.get('posts').find({ id: 2 }).value()  // find()内写入筛选条件
console.log(returnIt)   //  { id: 2, title: '天气不错' }

// 4. 删除数据
db.get('posts').remove({ title: '嗯' }).write()  // remove()内写入删除筛选的条件  
// 删除操作有返回值 返回被删除的对象

// 5. 更新数据(更改数据)
db.get('posts').find({ id: 2 }).assign({ title: '雨' }).write()  //  assign()更新的值



// 只要对db.json文件进行了操作，就要调用write()方法
// lowdb在大项目中不常用