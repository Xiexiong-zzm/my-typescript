// never 类型是任何类型的子类型，也可以赋值给任何类型。
// 没有类型是 never 的子类型，没有类型可以赋值给 never 类型（除了 never 本身之外）。即使 any也不可以赋值给 never 。

let test1: never
// test1 = 'xie'  报错 不能将类型“string”分配给类型“never”

let test2: any

// test1 = test2 报错，Type 'any' is not assignable to type 'never'
type A = { 
    s: string;
    b: boolean;
    f: () => string;
    arr: string[];
}
// type B<T> = {
//     readonly [S in keyof T]: B<T[S]>
// }
type B<T> = keyof T extends never ? T : {
    readonly [S in keyof T]: B<T[S]>
}
type C = B<A>

const pshObj: B<A> = {
    s: '111',
    b: false,
    f: () => { return '1' },
    arr: ['1']
}
const testObj: B<A> = null

// pshObj.obj.aaa.bb = [1111]
