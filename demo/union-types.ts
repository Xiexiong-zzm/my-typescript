// 联合类型
let num: number|string
num = 22
num = '222'


// 交叉类型
interface Person {
    name: string,
    age: number
}

type Student = Person & {grade: number}

// 联合类型 | 是指可以取几种类型中的任意一种 而交叉类型是指把几种类型合并起来，实现对象形状的组合和扩展
