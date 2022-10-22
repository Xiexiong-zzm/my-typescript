// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const n = s.length
    if(n%2===1) {
        return false
    }
    // 这里的Map是有技巧性的创建
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    const stk = []
    for(let ch of s) {
        if(pairs.has(ch)) {
            if(!stk.length||stk[stk.length-1]!==pairs.get(ch)) {
                return false
            }
            stk.pop()
        }else {
            stk.push(ch)
        }
    }
    return !stk.length
};