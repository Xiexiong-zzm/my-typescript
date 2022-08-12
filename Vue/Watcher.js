class Dep {
    constructor() {
        // 记录所有订阅者
        this.subs = [];
    }

    // 添加订阅者
    addSub(sub) {
        if(sub){
            this.subs.push(sub)
        }
    }

    // 通知所有订阅者
    notify() {
        console.log(this.subs)
        this.subs.forEach(sub => sub.update());
    }
}

// 订阅者
class Watcher {
    update() {
        console.log('update11111')
        console.log('update');
    }
}

// test
let dep = new Dep();
let watcher = new Watcher();
dep.addSub(watcher);
dep.notify();