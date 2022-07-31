// 泛型约束类
// 定义一个栈，有入栈和出栈两个方法，如果想入栈和出栈的元素类型统一，就可以这么写：
class Stack<T> {
    private data: T[] = []
    push(item: T) {
        return this.data.push(item)
    }
    pop():T|undefined {
        return this.data.pop()
    }
    // 特别注意 泛型无法约束类的静态成员
    // static pop():T|undefined {
    //     return this.data.pop()
    // }
}

// 在定义实例的时候写类型，比如，入栈和出栈都要是 number 类型
const arr = new Stack<number>()

arr.push(123)




// 泛型约束接口
// 使用泛型，也可以对 interface 进行改造，让 interface 更灵活
interface IKeyValue<T,U> {
    key: T
    value: U
}

const k1:IKeyValue<string,number> = {key:'sss',value:13}
const k2:IKeyValue<string,string> = {key:'sss',value:'13'}

// 泛型定义数组
// 定义数组可以用以下方式
const myArr: number[] = [1,2,3]
const myArr1: Array<number> = [1,2,3]
