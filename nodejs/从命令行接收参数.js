// argv属性包含所有命令行调用参数的数组
// 第一个参数是 node 命令的完整路径。第二个参数是正被执行的文件的完整路径
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

// 获取当前项目运行环境
const proxy = process.argv.slice(-1)[0].split('--proxy=')[1] || 'sit'