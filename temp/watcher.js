// 定义一个发布者
class Dep {
    constructor() {
        this.watchers = []
    }
    // 添加观察者
    add(watcher) {
        this.watchers.push(watcher)
    }
    remove(watcher) {
        this.watchers = this.watchers.filter(item => item !== watcher)
    }
    notify() {
        this.watchers.forEach(item => item.update())
    }
}

// 定义一个观察者
class Watcher {
    update() {
        console.log('update11111');
    }
}


const watcher = new Watcher()
const dep = new Dep()
dep.add(watcher)
dep.notify()