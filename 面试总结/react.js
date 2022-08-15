// React:
// **React如何组件通讯**
// 父子组件通讯：props传递数据、函数、类型检查
import PropTypes from 'prop-types'
const {xxx} = this.props
List.propTypes = {
    xxx: PropTypes.arrayOf(PropTypes.object).isRequired
}
// 自定义事件
// Redux和Context

// **React生命周期（父子组件的声明周期和vue的父子组件同理）**
// 挂载时：constructor(初始化组件的state、给事件处理方法绑定this)->render(返回需要渲染的内容)->react更新dom和refs->componentDidMount(执行dom操作、发送网络请求、添加订阅消息)
// 更新时：当组件的props改变时，调用setState/forceUpdate方法触发更新重新渲染->更新dom和refs->componentDidUpdate
// 卸载时：componentWillUnmount()会在组件卸载及销毁之前直接调用(清除定时器、自定义事件、取消创建的订阅)

// **React高级特性**
// 函数组件:没有实例、生命周期、state、不能扩展方法。当组件只接收props并返回jsx模板用函数组件，有其他逻辑的用class组件
// 受控组件：将state的InputName值和input输入框绑定在一起 
// 非受控组件：用React.createRef()创建ref、defaultChecked和defaultValue(表单的值用defaultXXX绑定)、手动操作DOM元素(用创建的ref.current获取DOM节点)。必须操作DOM的时候用非受控组件
// Portals：将组件渲染到父组件以外，用ReactDOM.createPortal(JSX模板, DOM节点)
// context：可把公共信息(语言、主题)传递给每个组件,For example:
// 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext('light')
// 子组件 - 函数式组件(因为没有this,所以用ThemeContext.Consumer)
function ThemeLink (props) {
    return <ThemeContext.Consumer>
        { value => <p>link's theme is {value}</p> }
    </ThemeContext.Consumer>
}
// 子组件 - class 组件
class ThemedButton extends React.Component {
    // static contextType = ThemeContext // es6语法 等同于下面那行代码ThemedButton.contextType = ThemeContext
    render() {
        const theme = this.context // React会往上找到最近的 theme Provider，然后使用它的值。
        return <div>
            <p>button's theme is {theme}</p>
        </div>
    }
}
ThemedButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context。
// 父组件
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    render() {
        return <ThemeContext.Provider value={this.state.theme}>
            
        </ThemeContext.Provider>
    }
}
// 异步组件:直接import('./xxx').then()、React.lazy(() => import(组件))、React.Suspense(设置属性fallback就是当组件未加载完的时候显示)。场景：组件比较大、路由懒加载等

// ***shouldComponentUpdate用途***
// react默认返回true,只要父组件有更新，子组件则无条件更新。所以性能优化对react更重要，根据业务需求配置shouldComponentUpdate
// 因为提前变更state的赋值会影响shouldComponentUpdate里头的相等判断，所以shouldComponentUpdate一定要配合不可变值才起作用
// react不建议进行深度比较state，所以引申出名为React.PureCompnent的Class组件和React.memo(component, func)的函数组件实现浅比较，只比较外层如果相等就返回false不重复渲染
// immutable.js 不可变值的库，基于数据共享(不是深拷贝)、速度快
import _ from 'lodash'
import React from 'react'
function shouldComponentUpdate(nextProps, nextState) {
    // 对象或数组深度比较相等(一次递归到底),所以state的数据设计尽量扁平，层次不要太多
    if(_.isEqual(nextState.count, this.state.count)){
        return false // 不重复渲染
    }
    return true // 可以渲染
}

// ***组件公共逻辑的抽离***
// 高阶组件HOC(High Order Components)、它是一种模式:把子组件包裹起来，用props去透传或者增加属性
const HOCFactory = (component) => {
    class HOC extends React.component{
        // 在此定义多个组件的公共逻辑
        render() {
            return <component {...this.props} mouse={this.state.mouse}/>
        }
    }
    return HOC
}
const component1 = HOCFactory(ThemedButton1)
const component2 = HOCFactory(ThemedButton2)
// redux的connect其实是高阶组件，TodoList是子组件
import {connect} from 'react-redux'
const visibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
// Render Props
// 父组件函数里头的子组件标签上(也就是写公共逻辑的组件上)自定义个属性render，它的值是一个纯函数子组件形式，通过props传给公共子组件，然后公共子组件渲染将state作为参数传给this.props.render(this.state)
// Hooks组件也可实现逻辑复用

// ***描述Redux(三大原则：单项数据流、state是只读的、使用纯函数来执行修改)***
// 单项数据流：dispatch(action) -> reducer返回新的newState(这里要不可变值) -> subscribe触发通知,手动更新store.getState()或者绑定到视图层
// <Provider store={store}>、connect(mapStateToProps、mapDispatchToProps)(子组件)
// action里头必须返回不可变值、connect高阶组件会把dispatch作为props传递给子组件，mapStateToProps(state, ownProps)、mapDispatchToProps(dispatch, ownProps)自定义将一些属性传给子组件

// ***关于setState***
// 使用不可变值：什么时候修改state什么时候去做计算操作，不能提前计算改变state的值，要保证设置state的时候值和设置之前不一样（原因是性能优化问题）
// setState同步还是异步：正常是this.setState是异步更新，但自定义DOM事件和setTimeout等回调方法里的setState是同步（主要看this.setState的时候isBatchingUpdate是true or false）
// 多次setState传对象的时候会被合并成1次，传函数的时候不会合并
this.setState({
    count: this.state.count + 1, // SCU = shouldComponentUpdate
},() => {
    // 这里等同于vue的$nextTick
    console.log('改了state的值，在这里可以获取的到')
})
// 不可变值--数组（注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值）
const list5Copy = this.state.list5.slice() //这个操作不会改变原数组
this.setState({
    list1: this.state.list1.concat(100), // 追加
    list2: [...this.state.list2, 100], // 追加
    list3: this.state.list3.slice(0, 3), // 截取
    list4: this.state.list4.filter(item => item > 100), // 筛选
    list5: list5Copy // 其他操作，this.state.list5的值没变，所里这里可以这么操作
})
// 不可变值 - 对象（注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值）
this.setState({
    obj1: Object.assign({}, this.state.obj1, {a: 100}),
    obj2: {...this.state.obj2, a: 100}
})

// ***React事件机制(合成事件机制)和DOM事件的区别，以及这样做的好处？***
// 所有的事件并不是绑定到真是的DOM上，而是被挂在到document上，但React17挂载在组件的root上(有利于多个React并存，比如微前端)。
// event是react自己合成的SyntheticBaseEvent，它模拟DOM事件所有能力。
// event.nativeEvent才是原生事件对象，而vue的event就是原生事件对象
// 阻止事件冒泡和默认行为都要用event.preventDefault()
// 这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。

// ***函数式编程(纯函数、不可变值(比如action里头返回的是不可变值))***

// ***React的vdom和diff算法***
// h函数：它是编译模板的函数，React.createElement('tag', null, [child1, child2, child3]),也可以是React.createElement('tag', null, child1, child2, child3)。第一个参数是标签名或者组件名(如何区分二者，React规定组件名首字母必须大写)，第二个参数null是第一个参数的属性对象啥的,然后返回vnode
// vnode数据结构
domtree = {
    tag: 'div',
    props: {
        className: 'container',
        id: 'app'
    },
    children: [
        {
            tag: 'p',
            children: 'vdom', // vue中  textnode和children是只存在一个
            text: ''
        },
        {
            tag: 'span',
            children: '', // vue中  textnode和children是只存在一个
            text: '哈哈哈哈'
        },
    ]
}
// patch函数：patch(ele, vnode)或patch(oldVnode, vnode)。
// ①第一步：判断第一个参数是否元素ID，是则直接创建新的vnode；否，则直接对vnode进行相同sameNode的比较。
// ②第二步：如果两个vnode相等则进入patchVnode()方法处理，如果不相等直接删除重建 处理返回的vnode，进行diff算法比较
// ③第三步：进入patchVnode方法,先把elem赋值旧的elem。注意vnode中text和children是不同存的，有text就没有children,有children就没有text
// 新的text无,说明有children可能有值
if(isUndef(vnode.text)){
    // 如果新children有，旧children有，如果不相等直接走updateChildren方法
    // 如果新children有，旧children无(说明旧的text有)，则清空text,再addVnodes()添加节点
    // 如果新children无，旧children有，直接removeVnodes()移除子节点
    // 如果新children无，旧children无(说明旧的text有)，则清空text
} 
// 新的text有,说明无children
else if(oldVnode.text !== vnode.text){
    removeVnodes() // 新children无，直接移除旧的子节点
    setTextContent() // 并设置新text
}
// diff算法：对比新旧节点时oldNode仅右移

// ***JSX的本质***
// 等同于Vue模板,Vue模板不是html,JSX也不是JS，它最终编译出来的是React.createElement的一堆函数体，返回的是vnode,最终通过patch实现渲染

// **React syntheticEvent合成事件机制的原理以及为什么**
// div或者元素事件冒泡到顶层document,react自己生成统一的名为SyntheticEvent对象，由事件对象的target可以知道是谁触发的，派发该元素上的绑定事件，将合成的对象通过参数传递进去执行处理函数
// 为何：更好的兼容性和跨平台，合成挂在document上，统一管理事务机制，减少了时间绑定次数，也避免频繁的解绑。避免组件多了给每个组件绑定事件，减少内存消耗

// **setState主流程、batchUpdate机制(批量状态更新)、transaction事务机制**
// setState主流程:this.setState(newState)->newState存入pending队列->判断是否处于batchUpdate机制中->是，则修改state的组件保存于dirtyComponents中，走异步方式更新。否，则遍历所有dirtyComponents，调用updateComponent更新pending、state、props，走同步方式更新。 
// batchUpdate机制: React生命周期、React注册事件(onClick)等React自己可以管理的入口可以命中这个机制。像setTimeout、自定义dom时间都是React管不到的入口，也就没法判断isBacthingUpdates的true和false，所以都会走同步更新
// transaction事务机制: 定义开始的初始状态、函数执行、结束的状态

// **组件渲染和更新过程**
// 渲染：初始化props和state,通过render()函数解析jsx生成vnode,然后类似于vue的patch()方法对比vnode渲染
// 更新：setState(newState)->生成dirtyComponents(除了当前触发修改的组件，可能还有子组件)->遍历所有的dirtyComponents,根据新的state或者props重新render()生成vnode,再类似于vue的patch()方法更新
// patch: 分两个阶段，执行diff算法阶段(reconciliation)和将diff结果渲染DOM阶段(commit)

// **为什么会有React Hooks，解决了什么问题**
// 碰到大型的Class组件很多重复的逻辑的会散落在各方法中不好维护比如ajax请求。而react希望组件是纯函数最好,输入参数返回结果,没有副作用。但是纯函数组件没有state和生命周期，纯函数组件无法存储state，所以需要把功能钩到纯函数中，其中就有state hook和effect hook。其次组件逻辑复用，Hooks表现更好
// State Hook：让函数组件实现state和setState的功能
import React, { useState } from 'react'
function ClickCounter() {
    // 数组的解构
    const [count, setCount] = useState(0) // 传入一个初始值
    const [name, setName] = useState('双越老师')
    function clickHandler() {
        setCount(count + 1)
        setName(name + '2020')
    }
    return <div>
        <p>你点击了 {count} 次 {name}</p>
        <button onClick={clickHandler}>点击</button>
    </div>
}
export default ClickCounter
// Effect Hook：模拟生命周期钩到函数组件上
// import React, { useEffect } from 'react'
// function ClickCounter() {
//     const [count, setCount] = useState(0)
//     const [name, setName] = useState('双越老师')
//     // 模拟componentDidMount和componentDidUpdate
//     useEffect(() => {
//         console.log('模拟componentDidMount和componentDidUpdate')
//     })

//     // 模拟componentDidMount,后面的数组参数为空
//     useEffect(() => {
//         console.log('模拟componentDidMount')
//     },[])

//     // 模拟componentDidUpdate,后面数组的参数变量更新就会触发
//     useEffect(() => {
//         console.log('模拟componentDidUpdate')
//     },[count, name])

//     // 模拟componentWillUnmount，需返回函数并且后面的数组参数为空
//     useEffect(() => {
//         let timer = window.setInterval(() => {
//             console.log('模拟componentWillUnmount')
//         },1000)
        
//         return () => {
//             window.clearInterval(timer)
//         }
//     },[])

//     // 模拟DidMount 和 DidUpdate 和 WillUnMount
//     useEffect(() => {
//         console.log(`开始监听在线状态`)
//         // 如果useEffect有模拟DidMount和DidUpdate的功能,那么此处并不完全等同于WillUnMount
//         // props发生变化既会更新也会执行结束监听，返回的函数会在下一次effect执行之前(也就是说在组件销毁之前)被执行
//         return () => {
//             console.log(`结束监听在线状态`)
//         }
//     })
//     return <div>
//         <p>useEffect是模拟生命周期的钩子</p>
//     </div>
// }
// export default ClickCounter
// useReducer: 它是单个组件的状态管理,组件通讯还得需要props,而redux是全局的状态管理,多组件共享数据

// **如何自定义Hook**
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// function useAxios(url) {
//     // 封装 axios 发送网络请求的自定义 Hook
//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState()
//     const [error, setError] = useState()
//     useEffect(() => {
//         // 利用 axios 发送网络请求
//         setLoading(true)
//         axios.get(url) // 发送一个 get 请求
//             .then(res => setData(res))
//             .catch(err => setError(err))
//             .finally(() => setLoading(false))
//     }, [url])

//     return [loading, data, error]
// }
// export default useAxios

// **React Hooks为何要依赖于调用顺序**
// 使用规范：只能用于react函数组件和自定义hook中，只能用于顶层代码，不能在循环和判断中使用或者函数中途提前return，这样会导致顺序变化。原因如下：
// 函数组件，纯函数，执行完即销毁。所以，无论组件初始化（render）还是组件更新（re-render）都会重新执行一次这个函数，获取最新的组件
// 这一点和class 组件不一样，class组件实例生成一次，除非手动销毁不然不会销毁。
// 所以hooks里头的解构取值是一一按顺序来的，所以如果中途遇到循环和判断或者return,re-render的时候可能取值就乱了

// **React Hooks性能优化**
// useMemo: 引入memo和useMemo，将子组件用const定义，然后用memo包裹起来。在子组件用useMemo将数据缓存起来，后面的参数也是数组依赖的值。useCallback将函数缓存起来,后面的参数数组为[]

// **React Hooks遇到过哪些坑**
// useState初始化值，只初始化一次；useEffect内部，不能修改state；useEffect依赖引用类型，会出现死循环

// **React Hooks相比HOC和Render Prop有哪些优点**
// 不会组件嵌套、变量作用域明确、符合自定义Hooks的规则易上手