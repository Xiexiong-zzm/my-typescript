// 为什么需要 buffer?
// Buffer 被引入用以帮助开发者处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据
const buf = Buffer.from('runoob');
console.log(buf);
console.log(buf.toString())