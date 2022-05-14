// 泛型的写法<>中写类型参数 一般用T表示
function print<T>(arg:T):T {
    console.log(arg);
    return arg;
}

// 这样就做到了输入和输出的类型统一 如果类型不统一就会报错
// const res:string = print(123) 


// 用泛型定义type和interface
type Print = <T>(arg:T) =>T
const printFn:Print = (arg) => {
    return arg
}

const res:number = printFn(23)

interface IPrint<T>{
    (arg:T): T
}

function print<T>(arg:T) {
    return arg
}

const myPrint: IPrint<number> = print

// 给泛型添加默认参数
type Test = <T = number>(arg:T) => T
interface ITest<T= number> {
    [key: string]:T
}

const company: ITest = {
    members: 10,
    months:10
} 

// 这里的泛型约束T可以当作是函数中的参数

// 使用泛型处理多个函数参数
function swap<T,U>(tuple:[T,U]): [U,T] {
    return [tuple[1],tuple[0]]
}

const result = swap(['text',13])


// 函数副作用操作
// 泛型不仅可以很方便的约束函数的参数类型，还可以用在函数执行副作用操作的时候
// 比如在我们的接口请求方法中
const request = (url: string) => {
    return fetch(url).then(response =>response.json())
}

// 没有做任何约束，返回值类型是any，非常不友好
request('user/info').then(res => {
    console.log(res);
})

// 改写
interface UserInfo {
    name: string;
    age: number;
}

// 改写请求方法
// function newRequest<T>(url: string):Promise<T> {
//     return fetch(url).then(response =>response.json())
// }
const newRequest = <T>(url: string):Promise<T> => {
    return fetch(url).then(response =>response.json())
}
newRequest<UserInfo>('user/info').then(res => {
    console.log(res); //使用一下 res.看看？
})

// 约束泛型
interface ILength {
    length: number
}

const printLength=<T extends ILength> (arg:T):T => {
    console.log(arg.length);
    return arg
}
printLength('10')
// printLength(10) // 会报错 不具备length属性