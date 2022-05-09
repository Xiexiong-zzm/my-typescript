// 类型推论 发生在初始化变量和成员，设置默认参数值和决定函数返回值时
let userName = 'xie'

// 重新对变量复制就会报错
// userName = () => {
//     return 'aaa'
// }


// 虽然 TS 可以推导出最合适的类型，但最好还是在写的时候就定义好类型
type arrItem = number | string | null

let arr: arrItem[] = [0,1,null,'aaa']