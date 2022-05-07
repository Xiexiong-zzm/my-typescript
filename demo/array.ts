let list: number[] = [1,2,3];

list.push(4);

// 数组里的项写错类型会报错
// let list2: number[] = [1,2,3,'4'];

// push 时类型对不上会报错
// list.push('a')
// console.log(list)



/**
 * 如果数组想每一项放入不同数据怎么办？用元组类型
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
*/
let tuple: [number, string] = [18, 'lin']  // 已知长度和类型
// 写错类型会报错
// let tuple2: [number, string] = [ 'lin',18] 
// 越界会报错
// let tuple3: [number, string] = [18, 'lin',222]
// 可以对元组使用数组的方法，比如使用 push 时，不会有越界报错 
tuple.push('aaa')
// push 一个没有定义的类型，报错
// tuple.push(true)
console.log(tuple)