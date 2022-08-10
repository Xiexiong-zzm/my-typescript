// Node.js JavaScript 代码运行在单个线程上。 每次只处理一件事。


/**
 * 阻塞事件循环
 * 任何花费太长时间才能将控制权返回给事件循环的 JavaScript 代码，都会阻塞页面中任何 JavaScript 代码的执行，甚至阻塞 UI 线程，并且用户无法单击浏览、滚动页面等。
 * JavaScript 中几乎所有的 I/O 基元都是非阻塞的。 网络请求、文件系统操作等。 被阻塞是个异常，这就是 JavaScript 如此之多基于回调（最近越来越多基于 promise 和 async/await）的原因。
*/


function bar() {
    console.log('bar');
}
function baz() {
    console.log('baz');    
}
async function asyncFoo() { 
    console.log('asyncFoo');
}
function foo() {
    console.log('foo');
    // 调用 setTimeout(() => {}, 0) 会在下一个滴答结束时执行该函数，比使用 nextTick()（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多。
    setTimeout(bar,0)
    process.nextTick(() => {
        baz();
    })
    asyncFoo()
    // bar();
}
foo();