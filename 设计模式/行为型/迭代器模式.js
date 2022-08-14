// 迭代器模式解决了以下问题：
// 1、提供一致的遍历各种数据结构的方式，而不用了解数据的内部结构
// 2、提供遍历容器（集合）的能力而无需改变容器的接口

// 迭代器通常需要实现以下接口：
// hasNext()：判断迭代是否结束，返回Boolean
// next()：查找并返回下一个元素

// 实现一下：
const item = [1, 'red', false, 3.14];
function Iterator(collection) {
    this.index = 0;
    this.collection = collection;
}

Iterator.prototype.hasNext = function () {
    return this.index < this.collection.length
}
Iterator.prototype.next = function () {
    return this.collection[this.index++];
}


const iterator = new Iterator(item);

while (iterator.hasNext()) {
    console.log(iterator.next());
}