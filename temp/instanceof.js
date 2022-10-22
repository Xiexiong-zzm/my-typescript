// 原理是判断一个对象在其原型链中是否在一个构造函数的protoType属性
function myInstanceof (left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}