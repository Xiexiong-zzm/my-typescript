const Obj = {
    name: 'zhangsan',
    getName: function () {
        console.log(this.name);
    }
}


Function.prototype.myCall = function (context) {
    if(typeof this!== 'function') {
        throw new TypeError('Error')
    }

    // context未定义、null、undefined或者未传参时，this指向window
    context = context || window;
    console.log(arguments);
    // 处理传入的参数
    const args = arguments.length > 1 ? [...arguments].slice(1) : ''
    console.log(args);
    let result
    context.fn = this
    result = context.fn(...args)

    delete context.fn
    return result
    
}

function logName(...params) {
    console.log(this.name,...params);
}


logName.myCall(Obj,1,2,3)