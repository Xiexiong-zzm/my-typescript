// TS 定义函数类型需要定义输入参数类型和输出类型,输出类型也可以忽略，因为 TS 能够根据返回语句自动推断出返回值类型
function add(x:number, y:number):number {
    return x + y
}
let res = add(1,2)
console.log(res);


// 函数没有明确返回值，默认返回 Void 类型
function welcome():void {
    console.log('welcome');
}

// 函数表达式写法
let add2 = (x:number, y:number):number => {
    return x + y
}

// 可选参数 参数后加个问号，代表这个参数是可选的 注意可选参数要放在函数入参的最后面，不然会导致编译错误
let add3 = (x:number, y?:number):number => {
    return x + y
}

// 默认参数
let add4 = (x:number=100, y:number):number => {
    return x + y
}

// 如果带默认值的参数不是最后一个参数，用户必须明确的传入 undefined值来获得默认值。
// add4(100)  报错，没有传y
add4(undefined,100) // ok

// 函数重载 两个函数名称相同，但是参数个数或参数类型不同

function add5(x: number[]): number
function add5(x: string[]): string
function add5(x: any[]): any {
  if (typeof x[0] === 'string') {
    return x.join()
  }
  if (typeof x[0] === 'number') {
      return x.reduce((acc, cur) => acc + cur)
  }
}

