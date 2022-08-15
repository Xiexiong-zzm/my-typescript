// // **数组是个有序的、连续的数据结构，unshift、shift、splice会非常慢，pop和push比较快！！！
// // 堆（heap）在逻辑结构上是一个二叉树，在物理结构上是一个数组

// // 1、将一个数组旋转K步,输入[1,2,3,4,5,6,7],旋转3步，输出[5,6,7,1,2,3,4]
// // 算法复杂度O(1)
// function rotate(arr, k) {
//     const length = arr.length
//     if(!k || leng === 0) return arr
//     const step = Math.abs(k) // 取绝对值
//     const part1 = arr.slice(-step)
//     const part2 = arr.slice(0, length - step)
//     const newArr = part1.concat(part2)
//     return newArr
// }
// const arr = [1,2,3,4,5,6,7]
// rotate(arr, 3)

// // 2、判断字符串是否括号匹配，输入(a{b}c)则匹配
// // 考察数据结构---栈的知识，先进后出，API有push pop length
// function isMatch(left, right){
//     if(left === '{' && right === '}') return true
//     if(left === '(' && right === ')') return true
//     if(left === '[' && right === ']') return true
//     return false
// }
// function matchBracket(str) {
//     const length = str.length
//     if(length === 0) return true
//     const stack = []
//     const leftSymbols = '({['
//     const rightSymbols = ')}]'
//     for(let i=0; i<length; i++){
//         const s = str[i]
//         if(leftSymbols.includes(s)){
//             // 判断左括号
//             stack.push(s)
//         }else if(rightSymbols.includes(s)) {
//             // 判断右括号
//             const top = stack[stack.length - 1]
//             if(isMatch(top, s)){
//                 stack.pop()
//             }else{
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }

// // 3、数组实现一个队列（用两个栈或链表都可以实现，但是链表更快）
// // 队列先进先出，API有add delete length
// class MyQueue {
//     constructor(){
//         // 私有属性可用TS的private
//         this.stack1 = []
//         this.stack2 = []
//     }
//     // 时间复杂度O(1)
//     add(n) {
//         this.stack1.push(n)
//     }
//     // 时间复杂度O(n)
//     delete() {
//         let res
//         // 将stack1的所有元素移到stack2
//         while(this.stack1.length){
//             const n = this.stack1.pop()
//             if(n !== null){
//                 this.stack2.push(n)
//             }
//         }
//         // 从stack2中出栈
//         res = this.stack2.pop()
//         // 将stack2的所有元素重新还给stack1
//         while(this.stack2.length){
//             const n = this.stack2.pop()
//             if(n !== null){
//                 this.stack1.push(n)
//             }
//         }
//         return res || null
//     }
//     get length() {
//         return this.stack1.length
//     }
// }
// // 单元测试用例，toBe用于值类型判断，toEqual用于对象数组引用类型的判断
// describe('单元测试', () => {
//     it('正常测试', () => {
//         const q = new MyQueue()
//         expect(q.length).toBe(0)
//         q.add(1)
//         q.add(2)
//         q.add(3)
//         expect(q.length).toBe(3)
//     })
//     it('delete', () => {
//         const q = new MyQueue()
//         expect(q.length).toBe(null)
//         q.add(1)
//         q.add(2)
//         q.add(3)
//         expect(q.delete()).toBe(1)
//         expect(q.length).toBe(2)
//     })
// })

// // 4、用数组实现链表
// // n1 = {value:100, next: n2}
// // n2 = {value:200, next: n3}
// // n3 = {value:300}
// // 数组是连续且有序的物理数据结构，新增和删除相对较慢（比如教室换座位的道理），但查找较快
// // 链表是非连续且有序的物理数据结构，新增和删除相对较快（直接删除next的指针引用），但查找较慢（需要遍历查找）
// // 对象是无序的数据结构
// function createLinkList(arr) {
//     const length = arr.length
//     if(!length) {
//         console.log('数组为空')
//         return
//     }
//     let curNode = {
//         value: arr[length-1]
//     }
//     if(length === 1) return curNode

//     for(let i = arr.length-2; i>=0; i--){
//         curNode = {
//             value: arr[i],
//             next: curNode
//         }
//     }
//     return curNode
// }
// const arr = [100, 200, 300]
// const list = createLinkList(arr)

// // 5、实现反转链表(原理要定义三个指针prev、cur、next)
// function reverseLinkList(nodeList) {
//     let prevNode = undefined
//     let curNode = undefined
//     let nextNode = nodeList || undefined
//     // 以nextNode为主，遍历链表
//     while(nextNode) {
//         // 第一个元素是，删除next
//         if(curNode && !prevNode){
//             delete curNode.next
//         }
//         // 反转指针
//         if(curNode && prevNode){
//             curNode.next = prevNode
//         }
//         // 三个指针整体往后移
//         prevNode = curNode
//         curNode = nextNode
//         nextNode = curNode.next
//     }
//     // 最后一个元素时，nextNode为空时，不走while循环，手动赋值next指针指向上一个元素
//     curNode.next = prevNode
//     return curNode
// }
// reverseLinkList(list)

// // 6、单向链表实现队列(可链条画图理解)
// // 思路：①设头head和尾tail指针②链表尾部进，头部出。因为单向链表头进尾出的话到了尾部删除了元素只有next没有prev，就不知道原先是谁指向了它③链表长度单独存取
// class MyQueue {
//     constructor(){
//         // 私有属性可用TS的private
//         this.head = null
//         this.tail = null
//         this.len = 0
//     }
//     // 链表尾tail入队,时间复杂度O(1)
//     add(n) {
//         const newNode = {
//             value: n,
//             next: null
//         }
//         // 处理head
//         if(this.head === null) {
//             this.head = newNode
//         }
//         // 处理tail
//         const tailNode = this.tail
//         if(tailNode) {
//             tailNode.next = newNode
//         }
//         this.tail = newNode
//         // 记录长度
//         this.len++
//     }
//     // 链表头head出队,时间复杂度O(n)
//     delete() {
//         const headNode = this.head
//         if(headNode === null || !this.len) return null

//         const val = headNode.value
//         this.head = headNode.next
//         this.len--
//         return val
//     }
//     get length() {
//         // length要单独存储，不能遍历链表
//         return this.len
//     }
// }
// const q = new MyQueue()
// q.add(1)
// q.add(2)
// q.add(3)
// console.log(q.length)
// console.log(q.delete())
// console.log(q.length)

// // 7、二分法查找，时间复杂度都是O(logn)，建议用循环的方式，因为递归的实现是频繁的去调用多次函数，调用函数有开销
// // 凡有序必二分，凡二分时间复杂度必包含logn
// // ①循环（建议用这种性能更好）
// function binarySearch1(arr, target) {
//     const length =  arr.length
//     if(length === 0) return -1
//     let startIndex = 0 // 查找区域开始位置
//     let endIndex = length -1 // 查找区域结束位置
//     while(startIndex <= endIndex){
//         const midIndex = Math.floor((startIndex + endIndex) / 2)
//         const midValue = arr[midIndex]
//         if(target < midValue ){
//             // 目标值在startIndex和midIndex区间
//             endIndex = midIndex - 1
//         }else if(target > midValue){
//             // 目标值在midIndex和endIndex区间
//             startIndex = midIndex + 1
//         } else {
//             // 相等
//             return midIndex
//         }
//     }
//     return -1
// }
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const target = 4
// binarySearch1(arr, target)
// // ②递归
// function binarySearch2(arr, target, startIndex, endIndex) {
//     const length =  arr.length
//     if(length === 0) return -1
//     if(startIndex == null) startIndex = 0 // 查找区域开始位置
//     if(endIndex == null) startIndex = length -1  // 查找区域开始位置

//     // 查找首尾相遇 说明还未找到则返回下标-1
//     if(startIndex > endIndex) return -1
//     const midIndex = Math.floor((startIndex + endIndex) / 2)
//     const midValue = arr[midIndex]
//     if(target < midValue ){
//         // 目标值在startIndex和midIndex区间
//         endIndex = midIndex - 1
//         return binarySearch2(arr, target, startIndex, endIndex)
//     }else if(target > midValue){
//         // 目标值在midIndex和endIndex区间
//         startIndex = midIndex + 1
//         return binarySearch2(arr, target, startIndex, endIndex)
//     } else {
//         // 相等
//         return midIndex
//     }
// }
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const target = 4
// binarySearch2(arr, target)

// // 8、给一个有序的数组，找出其中和为n的两个元素(定义双指针，用二分思想实现)
// // 输入[1, 2, 4, 10, 20],找出和为14的两个数，输入为4、10
// function findTwoNumber(arr, n){
//     let res = []
//     const length = arr.length
//     if(length === 0)return res

//     let i = 0 // 头
//     let j = length-1 // 尾
//     while(i<j){
//         const n1 = arr[i]
//         const n2 = arr[j]
//         const sum = n1 + n2
//         if(n < sum ){
//             j--
//         }else if(n > sum){
//             i++
//         } else {
//             res.push(n1)
//             res.push(n2)
//             break
//         }
//     }
//     return res
// }

// // 9、二叉树(Binary Tree)遍历，前序遍历：root -> left -> right, 中序遍历：left -> root -> right, 后续遍历：left -> right -> root
// // 二叉搜索树（Binary Search Tree）,规定：left包括其后代value <= root.value, right包括其后代value >= root.value
// const bst = {
//     value: 5,
//     left: {
//         value: 3,
//         left: {
//             value: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 6,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 8,
//             left: null,
//             right: null
//         }
//     }
// }
// const arr = []
// // 前序遍历
// function preOrderTree(nodeTree) {
//     if(nodeTree == null) return
//     arr.push(nodeTree.value)
//     preOrderTree(nodeTree.left)
//     preOrderTree(nodeTree.right)
// }
// // 中序遍历
// function midOrderTree(nodeTree) {
//     if(nodeTree == null) return
//     midOrderTree(nodeTree.left)
//     arr.push(nodeTree.value)
//     midOrderTree(nodeTree.right)
// }
// // 后序遍历
// function backOrderTree(nodeTree) {
//     if(nodeTree == null) return
//     backOrderTree(nodeTree.left)
//     backOrderTree(nodeTree.right)
//     arr.push(nodeTree.value)
// }

// // 10、求一个二叉树的第K小值（在二叉树里第几小的数）
// function getKeythValue(node, k){
//     midOrderTree(node)
//     console.log(arr)
//     return arr[k-1] || null
// }
// getKeythValue(bst, 3)

// // 12、斐波那契数列的第n个值：0 1 1 2 3 5 8 13 21 ……(用递归会程序奔溃O(2^n)，用循环记录中间结果O(n))
// // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2),动态规划
// function fibonacci(n) {
//     if(n <= 0) return 0
//     if (n === 1) return 1
//     let n1 = 1 // 记录n-1的结果
//     let n2 = 0 // 记录n-2的结果
//     let res = 0
//     for(let i=2; i<=n; i++){
//         res = n1 + n2
//         n2 = n1
//         n1 = res
//     }
//     return res
// }
// fibonacci(9)

// // 13、青蛙跳台阶的问题(解题思路：动态规划)
// // 一只青蛙可跳1级，也可跳2级，问青蛙跳n级台阶，总共有多少种方式？
// // f(n) = f(n-1) + f(n-2) 同上斐波那契数列原理

// // 14、将数组中的所有0移动到末尾,只移动0其他顺序不变，必须在原数组进行操作,输入[1,0,3,0,11,0] -> [1,3,11,0,0,0]
// // 思路：双指针(是解决嵌套循环时间复杂度O(n^2)很好的方式)，定义j指向第一个0，i指向j后面的第一个非0，交换i和j的值，继续向后移动，时间复杂度O(n)
// function moveZero(arr) {
//     // 必须在原数组进行操作 所以函数没有返回值
//     const length = arr.length
//     if(length === 0) return
//     let i
//     let j = -1
//     for(i = 0; i < length; i++){
//         if(arr[i] === 0){
//             // 第一个0
//             if(j < 0){
//                 j = i // j指向了第一个0
//             }
//         }
//         if(arr[i] !== 0 && j >= 0){
//             // 交换
//             const n = arr[i]
//             arr[i] = arr[j]
//             arr[j] = n
//             j++
//         }
//     }
// }

// // 15、获取字符串中连续字符最多的字符和次数（嵌套循环，因为有跳步时间复杂度为O(n)）
// // ①嵌套循环
// function getStrTimes(str){
//     let res = {
//         char: '',
//         num: 0
//     }
//     const length = str.length
//     if(length === 0) return res

//     let tempLength = 0 // 临时记录字符长度
//     for(let i = 0; i < length; i++){
//         tempLength = 0 // 初始化

//         for(let j = i; j < length; j++){
//             if(str[i] === str[j]){
//                 tempLength++
//             }
//             // 不相等，或者是最后一个元素了，要判断最大值
//             if(str[i] !== str[j] || j === length -1){
//                 if(tempLength > res.num){
//                     res.char = str[i]
//                     res.num = tempLength
//                 }
//                 if(i < length - 1){
//                     i = j - 1 // 跳步
//                 }
//                 break
//             }
//         }
//     }

//     return res
// }
// getStrTimes('aaaabcddeff')
// // ②双指针O(n)
// function getStrTimes(str){
//     let res = {
//         char: '',
//         num: 0
//     }
//     const length = str.length
//     if(length === 0) return res

//     let tempLength = 0 // 临时记录字符长度
//     let i = 0
//     let j = 0

//     for(; i < length; i++){
//         if(str[i] === str[j]){
//             tempLength++
//         }
//         if(str[i] !== str[j] || i === length -1){
//             if(tempLength > res.num){
//                 res.char = str[j]
//                 res.num = tempLength
//             }
//             tempLength = 0 // 初始化
//             if(i < length - 1){
//                 j = i // 让j追上i
//                 i--
//             }
//         }
//     }
//     return res
// }

// // 16、JS实现快速排序
// // 实现思路：获取中间值，使用splice（会修改原数组）或者slice（不会修改原数组）分成左边部分和右边部分，然后拼接
// function sortArr(arr) {
//     const length = arr.length
//     if(length === 0) return []

//     let left = []
//     let right = []
//     let midIndex = Math.floor(length / 2)
//     let midValue = arr.slice(midIndex, midIndex+1)[0]  // arr.slice(midIndex, midIndex+1)返回的是一个数组  所以要取第0个值
//     for(let i = 0; i < length; i++){
//         if(i !== midIndex){
//             const n = arr[i]
//             if(n < midValue){
//                 left.push(arr[i])
//             }
//             if(n > midValue){
//                 right.push(arr[i])
//             }
//         }
//     }
    
//     return sortArr(left).concat([midValue], sortArr(right))
// }
// sortArr([1,39,2,5,26,14])

// // 17、求1-max之间所有的对称数（回文），比如1,2,11,121
// // 计算机用数字计算是最快的，所以算法题的优先顺序是数字->字符串->数组
// // 思路：字符串首尾比较
// // 数字反转

// // 18、用JS切换字母大小写
// // 用ASCII编码遍历字符串判断

// // 19、数组快速排序

// // 20、冒泡排序

// 21、数组转成树
interface ItreeNode {
    name: String
    id: Number
    children?: ItreeNode | null
}

interface IArrayItem {
    id: Number
    name: String
    parentId: Number
}

function convert(arr: IArrayItem[]): ItreeNode | null{
    const idToTreeNode: Map<Number, ItreeNode> = new Map()
    let root = null
    arr.forEach(item => {
        const {id, name, parentId} = item
        const treeNode: ItreeNode = {id, name}
        idToTreeNode.set(id, treeNode)
        // 有父节点
        const parentNode = idToTreeNode.get(parentId)
        if(parentNode){
            if(parentNode.children === null) {
                parentNode.children = []
            }

            parentNode.children.push(treeNode)
        }
        // 找到根节点
        if(parentId === 0) root = treeNode
    })
    return root
}