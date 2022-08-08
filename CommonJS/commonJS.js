// CommonJS 规范中规定每个文件就是一个独立的模块，有自己的作用域，
// 模块的变量、函数、类都是私有的，外部想要调用，必须使用 module.exports 主动暴露，而在另一个文件中引用则直接使用 require(path)

// num.js
var a = 1
var b = 2
var add = function (){
  return a + b
}

// 导出
module.exports.a = a
module.exports.b = b
module.exports.add = add

// 引用
var num = require('./num.js')

console.log(num.a) // 1
console.log(num.b) // 2
console.log(num.add(a,b)) // 3

