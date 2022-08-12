Function.prototype.myBind = function (context=window) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const args = [...arguments].slice(1)
    const _this = this
    return function newFun() {
        if(this instanceof newFun) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, [...args, ...arguments])
    }
}