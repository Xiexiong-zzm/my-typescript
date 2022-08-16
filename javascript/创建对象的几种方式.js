// 字面量创建
const obj1 = {a:1}
console.log(obj1);
// 构造函数创建
function Obj2(a) {
    this.a = a
}

const obj2 = new Obj2(1)
console.log(obj2);

// new Object
const obj3 = new Object({a:2})

// Object.create
const obj4 = Object.create({a:3})


console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof (function(){}));
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof new RegExp());
console.log(typeof new Error());
console.log(typeof true);
console.log(typeof 'aa');
console.log(typeof String(1));