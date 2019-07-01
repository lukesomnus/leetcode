/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true
    if (s.length === 1) return false
    const map = {
        ['(']: ')',
        ['[']: ']',
        ['{']: '}'
    }
    const arr = [s[0]]
    const close = [')', ']', '}']
    /** 
     * 可以再优化，比如({[}}
    */
    for (let i = 1; i < s.length; i++) {
        if (s[i] === map[arr[arr.length - 1]]) {
            arr.pop()
        } else {
            // 如果当前数组不为空，并且出现右闭合的时候，就是非法的
            if (arr.length > 0) {
                if (close.indexOf(s[i]) > -1) {
                    return false
                }
            }
            arr.push(s[i])
        }
    }
    return !arr.length
};

