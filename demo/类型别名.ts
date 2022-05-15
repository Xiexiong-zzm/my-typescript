// 类型别名用type关键字来书写，有了类型别名，书写TS更加方便简洁
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 使用类型别名帮助我们快速完成 传字符串或者函数都可以
getName('xie')
getName(()=>{
    return 'aaa'
})
// getName(1213) // 这个会提示错误


// 类型别名结合之前的联合类型 交叉类型使用
type Age = number
type arrItem= number|string
const arr1:arrItem[] = [1,'2',3]
type NewPerson = {
    name: Name
}

type Student2 = NewPerson & {
    grade: number
}
type Tercher2 = NewPerson & {
    marjor: string
}

type StudentAndTeacherList = [Student2,Tercher2] // 元组类型
const list:StudentAndTeacherList = [
    {
        name:'aaa',
        grade:2
    },
    {
        name: 'bbb',
        marjor:'math'
    }
]


// type 和 interface的区别
/**
 * 相同点：
 * 1、都可以定义一个对象和函数
 * 2、都可以继承
 * 3、都可以定义一个对象或者函数
*/