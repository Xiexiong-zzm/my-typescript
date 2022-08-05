// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

// 数组解构
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// 如果解构不成功，变量的值就等于undefined。
let [bar, foo] = [1];
console.log(bar, foo); // 1 undefined

// 不完全解构
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [m, [n], d] = [1, [2, 3], 4];
m // 1
n // 2
d // 4


// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
// let [x, y] = 'hello'; // 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 对于 Set 结构，也可以使用数组的解构赋值。 只要某种数据结构具有 Iterator 接口 都可以采用数组形式的解构赋值
// let [x, y, z] = new Set(['a', 'b', 'c']);
// x // "a"



/**
 * 对象解构
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
*/
// 没有对应的同名属性，导致取不到值，最后等于undefined。
let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined

// foo是模式，test是变量 模式foo是不会被赋值的
let { foo: test } = { foo: 'aaa', bar: 'bbb' };
test // "aaa"
foo // error: foo is not defined


/**
 * 字符串解构
*/

// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"

// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
len // 5

/**
 * 数值和布尔值的解构赋值
 * 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
*/

let {toString: r1} = 123;
r1 === Number.prototype.toString // true

let {toString: r2} = true;
r2 === Boolean.prototype.toString // true

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError

/**
 * 函数参数的解构赋值
*/



/**
 * @desc 解构赋值用处
 * 1. 交换变量的值
 * 2. 从函数返回多个值
 * 3. 函数参数的定义
 * 4. 提取 JSON 数据
 * 5. 函数参数的默认值
 * 6. 遍历 Map 结构
 * 7. 输入模块的指定方法
 * 
*/