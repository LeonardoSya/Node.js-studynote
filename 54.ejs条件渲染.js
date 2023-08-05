/*
通过 isLogin  决定输出内容
true 输出 <span>welcome</span>
false 输出 <button>register</button> <button>login</button>
*/

const ejs = require('ejs')
const fs = require('fs')
let isLogin = false
const result = ejs.render(fs.readFileSync('54.test.log').toString(), { judgement: isLogin })
console.log(result)
