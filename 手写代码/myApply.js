Function.prototype.myApply = function(context) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }

    // context未定义、null、undefined或者未传参时，this指向window
    context = context || window;
    const args = arguments[1]||[]
    context.fn = this
    let result = context.fn(args)

    delete context.fn
    return result
}


const Person = {
    name: 'zhangsan',
    getName: function () {
        console.log(this.name);
    }
}

function logName(params) {
    console.log(this.name,params);
}

logName.myApply(Person,[1,23,4])