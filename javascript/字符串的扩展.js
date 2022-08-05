// ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
"\u0061"
// "a"


// ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
for (let codePoint of 'foo') {
    console.log(codePoint)
  }
  // "f"
  // "o"
  // "o"


  /* JSON.stringify() 的改造 */

  /* 模板字符串 */
