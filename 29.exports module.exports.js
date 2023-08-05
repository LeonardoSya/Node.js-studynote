/*
nodejs采用commonJs规范，当前文件是一个模块(module)私有域，
通过exports属性导出，通过require()引入模块，通过 .xx 去获取值，从而加载该模块的exports属性

module是一个Module实例，nodejs中定义了一个Module类，exports是它的一个属性

module.exports简单来说就是给Module实例中的exports对象添加属性/方法
exports是module.exports的【引用】，可以理解为nodejs内置了 var exports = module.exports
因此 构造函数应该挂载到module.exports上

不要同时使用exports和module.exports  exports和module.exports如果在同一个文件内使用，只能获取到module.exports的值

exports = module.exports = {}
*/