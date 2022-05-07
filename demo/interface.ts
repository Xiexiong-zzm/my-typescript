// 接口
interface Person {
    name: string;
    age: number;
}

// 属性必须和类型定义的时候完全一致。多写、少写，类型不匹配都会报错
const me:Person = {
    name: 'alex',
    age: 20,
}

// 定义可选属性
interface Animal {
    name: string,
    function: Function,
    age?:number
}

const cat:Animal = {
    name: 'cat',
    function: () => {
        console.log('eat fish')
    }
}

// console.log(cat);
// console.log(cat.function());

// 只读属性
interface Goods {
    price: number,
    readonly name: string
}
// 现在name不能修改
const shirt:Goods = {
    price: 199,
    name: 'unique'
}

// shirt.name = 'aaa' // 无法分配到 "name" ，因为它是只读属性。

// interface 描述函数类型
interface ISum {
    (x:number,y:number):number
}

const reAdd:ISum = (num1, num2) => {
    return num1 + num2
}

// 自定义属性（可索引的类型）
interface RandomKey {
    [propName:string]:string
}

const obj: RandomKey = {
    a: 'hello',
    b: 'lin',
    c: 'welcome',
}

// 如果把属性名定义为 number 类型，就是一个类数组了，看上去和数组一模一样。
interface LikeArray {
    [propName: number]: string  // 这里键名相当于数组索引
}

const arr: LikeArray = ['hello', 'lin']

arr[0] // 可以使用下标来访问值
// 但是不具备数组的方法，并非真正的数组
// arr.push(1) //会报错
