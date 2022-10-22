Function.prototype.myNew = function (constructor, args) {
    if (typeof constructor !== 'function') { throw Error('aaaa') }
    // 创建一个继承构造函数原型属性的对象
    let obj = Object.create(constructor.prototype)
    let result = constructor.call(obj, ...args)

    return result instanceof Object ? result : obj
}