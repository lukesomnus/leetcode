/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //   const arr = Array.from(s);
  const map = {
    I: 1,
    V: 5,
    IV: 4,
    X: 10,
    IX: 9,
    L: 50,
    XL: 40,
    C: 100,
    XC: 90,
    D: 500,
    CD: 400,
    M: 1000,
    CM: 900
  };
  const sp = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      res += map[s[i]];
    } else {
      if (sp.indexOf(s[i] + s[i + 1]) > -1) {
        res += map[s[i] + s[i + 1]];
        i++;
      } else {
        res += map[s[i]];
      }
    }
  }
  return res;
};
