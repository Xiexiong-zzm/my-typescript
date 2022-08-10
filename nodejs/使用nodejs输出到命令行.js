// 1. console.log() 该方法会打印传入到控制台的字符串
// const x = 'x'
// const y = 'y'
// console.log(x, y)

// console.clear() 会清除控制台


// 元素计数
const x = 1
const y = 2
const z = 3
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)


// 打印堆栈踪迹
const function2 = () => console.trace()
const function1 = () => function2()
function1()