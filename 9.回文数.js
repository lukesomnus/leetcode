/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     if (x < 0) return false
//     const str = x + ''
//     return +(str.split('').reverse().join('')) == x
// };

var isPalindrome = function (x) {
    let prev = x
    if (x < 0) return false
    if(x==0) return true
    if (x > 0 && x < 10) return true
    if (x % 10 === 0) return false
    let ret = 0
    while (x >= 1) {
        ret = x < 10 ? (ret + x) : (ret + x % 10) * 10
        x = parseInt(x / 10)
    }
    return ret === prev
};

