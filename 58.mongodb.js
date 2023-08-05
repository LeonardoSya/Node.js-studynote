/*
Mongodb是一个基于分布式文件存储的数据库
数据库(Database)是按照数据结构来组织、存储和管理数据的应用程序。数据库的主要作用是管理数据，增删改查。Mongodb操作语法与js类似


database: 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合
collection: 集合类似于js中的数组，在集合中可以存放很多文档
document: 文档是数据库中的最小单位，类似js中的对象。对象(文档)中的属性也被称为字段

一般情况下一个项目使用一个数据库
一个集合会存储同一类型的信息

Mongodb服务跑起来：
cmd bin>mongod:
"msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}
cmd bin>mongo:
这样就建立了服务端与客户端联系

注意，一定不能点击运行后的mongod页面，否则必须敲回车来取消选中

*/

/*
1. 数据库命令
show dbs  显示所有数据库
use 库名  切换到指定数据库，如果数据库不存在则会自动创建数据库
db  显示当前所在数据库
use 库名   db.dropDatabase()   删除当前库

2. 集合命令
db.createDatabase('集合名称')  创建集合
show collections  显示当前数据库中的所有集合
db.集合名.drop()   删除某个集合
db.集合名.renameCollection('newName')  重命名集合 

3. 文档命令
db.集合名.insert('文档对象')    插入文档
db.集合名.find(查询条件)   _id是mongodb自动生成的唯一编号，用来唯一标识文档
db.集合名.update(查询条件, 新的文档)   更新文档 
db.集合名.update({name:'张三'}, {$set:{age:19}})   更新文档
db.集合名.remove(查询条件)   删除文档
*/