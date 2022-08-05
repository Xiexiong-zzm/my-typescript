// 暂时性死区
var a = 11

if(true) {
    a =2 // ReferenceError: Cannot access 'a' before initialization
    let a
}

console.log(a)


if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
  
    let tmp; // TDZ结束
    console.log(tmp); // undefined
  
    tmp = 123;
    console.log(tmp); // 123
  }



//   “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x // 会报错 
let x


//  比较隐蔽的死区 x赋值变量y,此时y还未声明,所以会报错
function bar(x = y, y = 2) {
    return [x, y];
  }
  
  bar(); // 报错

//  let不允许在相同作用域内，重复声明同一个变量
// 报错
// function func() {
//     let a = 10;
//     var a = 1;
//   }

//   // 报错
// function func() {
//     let a = 10;
//     let a = 1;
//   }

// // 函数内重新声明参数也会报错
// function func(a) {
//     let a
// }

// function func(arg) {
//     {
//       let arg;
//     }
//   }
//   func() // 不报错  不在相同作用域

// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
// ES6有6种声明变量的方法，分别是var、let、const、function、class、import。