// JS 八种内置类型
let myName: string = 'alex'
let age: number = 100
let isHandsome: boolean = true
let u:undefined = undefined
let n:null = null
let obj:object = {name:'aa',age:10}
let big:bigint = 100n
let sym:symbol = Symbol('aaa')


// ECMAScript 的内置对象
const nums: Array<number> = [11,22,33]
const date:Date = new Date()
const err:Error = new Error('error')
const reg:RegExp = /abc/
Math.pow(2,9)

// DOM 和 BOM
let body:HTMLElement = document.body
let addDiv:NodeList = document.querySelectorAll('div')
document.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault()
  // Do something
});