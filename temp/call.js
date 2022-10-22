Function.prototype.myCall = function (context = window, args) {
    if (this === Function.prototype) return undefined; // 用于防止 Function.prototype.myCall() 直接调用

    let fn = Symbol(); // 生成唯一key值
    context[fn] = this;

    const result = context[fn](...args);
    delete context[fn];
    return result;
}


Function.prototype.myApply = function (context = window, args) {
    if (this === Function.prototype) return undefined;
    let fn = Symbol(); // 生成唯一key值
    context[fn] = this;
    // 因为apply要求传入的参数是数组，加一个判断
    let result
    if (Array.isArray(args)) {
        result = context[fn](args);
    } else {
        result = context[fn]()
    }
    delete context[fn];
    return result;
}

Function.prototype.myBind = function (context = window, args) {
    if (this === Function.prototype) {
        throw new TypeError('Error')
    }
    const _this = this

    return function F(args2) {
        if(this instanceof F) {
            return new this(...args,...args2)
        }

        return _this.myApply(context,[...args,...args2])
    }
}


