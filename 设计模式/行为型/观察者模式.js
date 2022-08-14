// 创建一个被观察对象
class Dep {
    // 构造器 设置subs用于接收订阅者
    constructor() {
        this.subs = []
    }
    // 添加订阅者
    addSub(sub) {
        this.subs.push(sub)
    }
    // 删除订阅者
    removeSub(sub) {
        this.subs = this.subs.filter(item => item !== sub)
    }
    // 通知订阅者
    notify() {
        this.subs.forEach(sub => sub.update())
    }
}

// 定义订阅者
class Watcher{
    update() {
        console.log('观察者更新了')
    }
}
const subject = new Dep()
const watcher = new Watcher()
subject.addSub(watcher)
subject.notify()