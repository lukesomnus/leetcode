/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = false
    if (x < 0) {
        flag = true
    }
    const str = flag ? (x + '').substr(1) : x + '';
    const reverseStr = +(str.split('').reverse().join(''))
    const res = flag ? -reverseStr : reverseStr
    if (res > (Math.pow(2, 31) - 1) || res < Math.pow(-2, 31)) return 0;
    return res;
};

