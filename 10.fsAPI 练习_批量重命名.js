// 批量重命名

// 把个位数变成0x
const fs = require('fs')
// 读取code文件夹
const files = fs.readdirSync('D:/桌面/Node.js/code')
// 遍历数组
files.forEach(item => {
    // 拆分文件名
    const data = item.split('.')  // 遇到 . 就拆分数组为字符串
    const [num, name, js] = data
    if (Number(num) < 10 && num[0] != 0) {
        const newName = '0' + `${item}`
        fs.renameSync(`./code/${item}`, `./code/${newName}`)
    }
});

// 把0x变成x
const fs = require('fs')
const filess = fs.readdirSync('./code')
filess.forEach((item, i = 0) => {
    
    const data = item.split('.')
    const [num, name, format] = data
    console.log([num, name, format])
    if (num[0] == 0) {
        const newName = `${i}.` + `${name}.` + `${format}`
        fs.renameSync(`./code/${item}`, `./code/${newName}`)
    }
})