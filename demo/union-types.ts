// 联合类型
let num: number|string
num = 22
num = '222'


// 交叉类型
// 如果要对对象形状进行扩展，可以使用交叉类型 &
interface Test2 {
    name: string,
    age: number
}

type Student22 = Test2 & {grade: number}

const student1:Student22 = {
    name: '11',
    age: 11,
    grade:2
}
type Student33 = Person & {grade: number}

// 联合类型 | 是指可以取几种类型中的任意一种 而交叉类型是指把几种类型合并起来，实现对象形状的组合和扩展
