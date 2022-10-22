// 实现单例模式
// IIFE
const FooServiceSingleton = (function singleTon() {
    // 定义一个要创建的构造函数
    function service() {}

    // 存储生成的对象
    let serviceObj = Object.create(null);

    return {
        // getInstance作为一个闭包
        getInstance: function() {
            // 如果没有创建过，进行对象创建
            if (!serviceObj) {
                serviceObj = new service();
            }
            return serviceObj
        }
    }
})()