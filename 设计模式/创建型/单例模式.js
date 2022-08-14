// 单例构造器
// 实现的关键点有：
// 1. 使用 IIFE创建局部作用域并即时执行；
// 2. getInstance() 为一个 闭包 ，使用闭包保存局部作用域中的单例对象并返回。
const FooServiceSingleton = (function () {
    // 隐藏的Class的构造函数
    function FooService() { }

    // 未初始化的单例对象
    let fooService;

    return {
        // 创建/获取单例对象的函数
        getInstance: function () {
            if (!fooService) {
                fooService = new FooService();
            }
            return fooService;
        }
    }
})();

const fooService1 = FooServiceSingleton.getInstance();
const fooService2 = FooServiceSingleton.getInstance();

console.log(fooService1 === fooService2); // true