function myNew(constructor, ...args) {
    if (typeof constructor !== 'function') {
        throw new Error('not a function');
    }
    // 创建一个新对象
    var obj = new Object();
    // 将构造函数的原型指向新对象
    obj.__proto__ = constructor.prototype;
    let result = constructor.apply(obj, args);
    return result instanceof Object ? result : obj;
}