// 借助构造函数实现继承 缺点是不能继承父类原型链上的对象
function Person(name) {
    this.name = name;
}

function Son1(name,age) {
    this.age = age;
    Person.call(this, name);
}

const o1 = new Son1('张三', 18);
// console.log(o1); 


// 借助原型链实现继承 缺点是如果父类里的原型包含引用类型，创建的子类实例其中一个改变了该引用数据，其他子类实例都会改变
function Son2(age) {
    this.age = age;
}

Son2.prototype = new Person('张三');
const o2 = new Son2(18);
console.log(o2.__proto__);
console.log(o2.name);


// 组合方式实现继承 这里直接写最优解
function Son3(name,age) {
    this.age = age;
    Person.call(this, name);
}

Son3.prototype = Object.create(Person.prototype);
Son3.prototype.constructor = Son3;