// 比如下面的函数 入参是联合类型 返回入参中的length
function getLength(arg: number|string) {
    // return arg.length; //会报错 number上不存在length属性
    // 类型保护 typeof
    if(typeof arg === 'number') {
        return arg.toString().length;
    }else {
        return arg.length
    }
}

// 使用类型断言
function getLength2(arg: number|string) {
    // return arg.length; //会报错 number上不存在length属性
    const str = arg as string;
    if(str.length) {
        return str.length
    }else {
        const number = arg as number
        return number.toString().length
    }
}

// 定义字面量类型
type ButtonSize = 'mini'|'small'|'normal'|'large'
type Sex= 'male'|'female'

// const sex:Sex = '不男不女' // 会报错
const sex:Sex = 'male'
