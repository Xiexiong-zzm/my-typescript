// 1. String.fromCodePoint()
// ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true


/* 2. String.raw() */

/* 3. 实例方法：codePointAt() */

/* 4. 实例方法：normalize() */

/* 5. 实例方法：includes(), startsWith(), endsWith()*/
