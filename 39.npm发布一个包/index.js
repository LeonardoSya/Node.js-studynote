// 本文件的名字必须与package.json里main属性的值保持一致

// pulish   unpublish --force   发布/删除包
// 更新时修改版本号并测试

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}

module.exports = {
    add,
    sub,

}
