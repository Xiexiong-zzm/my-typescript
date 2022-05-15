// 联合类型
let num: number|string
num = 22
num = '222'


// 交叉类型
// 如果要对对象形状进行扩展，可以使用交叉类型 &
interface Test {
    name: string,
    age: number
}

type Student22 = Test & {grade: number}

const student1:Student22 = {
    name: '11',
    age: 11,
    grade:2
}