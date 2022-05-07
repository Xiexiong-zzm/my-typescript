// 类  JS 是靠原型和原型链来实现面向对象编程的，es6 新增了语法糖 class
// TS 通过 public、private、protected 三个修饰符来增强了 JS 中的类

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is speaking`);        
    }
}

const zhangsan = new Person('zhangsan');

zhangsan.speak()

// 类的继承
// 使用 extends 关键字实现继承，定义一个 Student 类继承自 Person 类
class Student extends Person {
    study() {
        console.log(`${this.name} needs study`)
    }
}

const s1 = new Student('lisi')
s1.speak()
s1.study()


// super关键字
class Employer extends Person {
    age: number
    // 派生类定义自己的属性需要使用super继承父类的属性，否则会报错 以下会报错
    // constructor(age:number) {
    //     this.age = age
    // }
    // 使用super关键字
    constructor(name: string,age:number) {
        super(name)
        this.age = age
    }
}
