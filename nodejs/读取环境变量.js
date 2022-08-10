// Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量
// 这是访问 NODE_ENV 环境变量的示例，该环境变量默认情况下被设置为 development。
// 项目打包构建后，该环境变量会被设置为 production。

process.env.NODE_ENV // 'development'