// never 类型是任何类型的子类型，也可以赋值给任何类型。
// 没有类型是 never 的子类型，没有类型可以赋值给 never 类型（除了 never 本身之外）。即使 any也不可以赋值给 never 。

let test1: never
// test1 = 'xie'  报错 不能将类型“string”分配给类型“never”

let test2: any

// test1 = test2 报错，Type 'any' is not assignable to type 'never'