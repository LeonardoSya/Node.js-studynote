const we = ['zyy', 'qja', 'leonar', 'sya']
// 原生js
// let str = '<ul>'
// we.forEach(item => {
//     str += `<li>${item}</li>`  // 这里html标签和变量是 耦合的
// })
// str += '</ul>'
// console.log(str);
// ejs
const fs = require('fs')
const ejs = require('ejs')
let result = ejs.render(fs.readFileSync('53.test.log').toString(), {we})   // 这里toString()必须写 否则读入格式是buffer(object)
console.log(result)
/*
<ul>

    <li>zyy</li>

    <li>qja</li>

    <li>leonar</li>

    <li>sya</li>

</ul>
*/
    