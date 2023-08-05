/*
在模块中使用require传入文件路径即可引入文件
const test = require('./test.js)

注意：
    1. 导入路径推荐写相对路径 且不省略./和../
    2. js和json文件导入时可以不写后缀 c/c++编写的node扩展文件也可以不写后缀
    3. 如果导入其他类型文件或文件没有后缀 会以js文件进行处理 
    4. 如果导入路径是一个文件夹 则会优先检测文件夹下package.json文件中的main属性对应的文件 存在则导入否则报错 如果main属性或package.json不存在则会尝试导入文件夹下的index.js和index.json 否则报错
    5. 导入node.js内置模块时，直接require模块的名字，无需加./和../


*/

// 导入文件
const test = require('./29.模块暴露数据/test')
console.log(test)   // { work: [Function: work], sleep: [Function: sleep] }
test.work()

// 导入文件夹
const ff = require('./29.模块暴露数据')
console.log(ff)   // { work: [Function: work], sleep: [Function: sleep] }


/*
require导入自定义模块的基本流程:
    1. 将相对路径转为绝对路径，定位目标文件
    2. 缓存检测
    3. 读取目标文件代码
    4. 包裹为一个函数并执行(自执行函数) 通过 arguments.callee.toString() 查看自执行函数
    5. 缓存模块的值
    6. 返回 module.exports 的值
*/


// 利用一段[伪代码]展示require导入自定义模块的流程
function require(file) {
    // 1. 相对路径转绝对路径
    const absolutePath = path.resolve(__dirname, file)
    // 2. 缓存检测  如果以前加载过/导入过这个文件 就直接将这个文件的暴露值返回
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }
    // 3. 读取文件代码
    const code = fs.readFileSync(absolutePath).toString()
        // 4. 包裹为一个函数然后执行
        (function (exports, require, module, __filename, __dirname) {
            const func = {
                name: 'zyy'
            }

            module.exports = func
            console.log(arguments.callee.toString())

        })(exports, require, module, __filename, __dirname)
    // 5. 缓存结果
    caches[absolutePath] = module.exports
    return module.exports
}