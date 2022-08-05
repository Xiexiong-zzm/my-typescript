// extends关键词特性（重点）
interface T1 {
    name: string,
  }
  
  interface T2 {
    sex: number,
  }
  
  /**
   * @example
   * T3 = {name: string, sex: number, age: number}
   */
  interface T3 extends T1, T2 {
    age: number,
  }
//   注意，接口支持多重继承，语法为逗号隔开。如果是type实现继承，则可以使用交叉类型type A = B & C & D。




/**
 * @example
 * type A1 = 1
 */
 type A1 = 'x' extends 'x' ? 1 : 2;

 /**
  * @example
  * type A2 = 2
  */
 type A2 = 'x' | 'y' extends 'x' ? 1 : 2;
 
 /**
  * @example
  * type A3 = 1 | 2
  */
 type P<T> = T extends 'x' ? 1 : 2;
 type A3 = P<'x' | 'y'>
 
//  提问：为什么A2和A3的值不一样？

// 如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型
// 若extends前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给extends后面的类型（是一个分发的过程）。
