const path = require('path')
const ConsoleLogPlugin = require('./webpack/plugin/ConsoleLogPlugin')
module.exports = {
    mode: 'development',
    entry: './webpack/entry/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sum.js'
    },
    plugins: [
        new ConsoleLogPlugin()
    ]
}