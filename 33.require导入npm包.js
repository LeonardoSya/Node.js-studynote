/* 
require 导入 npm 包基本流程
1. 在当前文件夹下 node_modules 中寻找同名的文件夹
2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录

*/

const arr = [1, 1, 2, 2, 3, 5]

require("uniq")(arr)
console.log(arr)    //   [ 1, 2, 3, 5 ]
