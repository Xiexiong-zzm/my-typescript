// keyof（索引查询）
// keyof 操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
interface IPerson {
    name: string;
    age: number;
}
type P = keyof IPerson // 'name' | 'age' P类型变成了一个字符串字面量



// T[K]（索引访问）
// T[K]，表示接口 T 的属性 K 所代表的类型
let type1: IPerson['name'] = '2132'
let type2: IPerson['age'] = 122


// extends (泛型约束)
// T extends U，表示泛型变量可以通过继承某个类型，获得某些属性

interface ILength {
    length: number;
}

const printLength2 = <T extends ILength>(arg:T) => {
    return arg
}

// 这样入参就一定要有 length 属性，比如 str、arr、obj 都可以， num 就不行
const str = printLength2('lin')
const arr3 = printLength2([1,2,3])
const obj = printLength2({ length: 10 })

// const num = printLength2(10) // 报错，Argument of type 'number' is not assignable to parameter of type 'ILength'



// 使用泛型实现动态属性的检查
// 改造前
const userInfo = {
    name: 'lin',
    age: 18,
}

function getValues(userInfo: any, keys: string[]) {
    return keys.map(key => userInfo[key])
}


// 使用泛型约束
// 定义泛型 T、K，用于约束 userInfo 和 keys
// 为 K 增加一个泛型约束,使 K 继承 userInfo 的所有属性的联合类型, 即K extends keyof T
function newGetValues<T,K extends keyof T>(userInfo: T,keys: K[]):T[K][] {
    return keys.map(key => userInfo[key])
}

let arr4 = newGetValues(userInfo,['name','age'])

console.log(arr4);
