// 发布订阅调度中心
class PubSub {
  constructor() {
    this.message = {}
    this.listeners = {}
  }
  // 事件发布
  publish (type, content) {
    const existcontent = this.message[type]
    if (!existcontent) {
      this.message[type] = []
    }
    this.message[type].push(content)
  }
  // 订阅方法
  subscribe (type, cb) {
    const existListener = this.listeners[type]
    if (!existListener) {
      this.listeners[type] = []
    }
    this.listeners[type].push(cb)
  }
  // 通知更新
  notify (type) {
    const message = this.message[type]
    const subscribers = this.listeners[type] || []
    subscribers.forEach((cb, index) => {
      cb(message[index])
    })
  }
}

class Publisher {
  constructor(name, context) {
    this.name = name
    this.context = context
  }
  publish (type, content) {
    this.context.publish(type, content)
  }
}

// 订阅者
class Subscriber {
  constructor(name, context) {
    this.name = name
    this.context = context
  }

  subscribe (type, cb) {
    this.context.subscribe(type, cb)
  }
}

const TYPE_A = 'music'

const pubsub = new PubSub()
const PublisherA = new Publisher('PublisherA', pubsub)
PublisherA.publish(TYPE_A, 'we are young')

const subscriberA = new Subscriber('subscriberA', pubsub)
subscriberA.subscribe(TYPE_A, res => {
  console.log('subscriberA received', res)
})
pubsub.notify(TYPE_A)