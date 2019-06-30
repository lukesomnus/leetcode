/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  //  只有一项，直接返回这项
  if (strs.length === 1) return strs[0];
  // 优化，选找出最短的字符串
  const newStrs = strs.sort((a, b) => {
    return a.length - b.length;
  });
  const cur = newStrs[0];
  const arr = [];
  for (let i = 0; i < cur.length; i++) {
    // 判断是否符合规则
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      // 第n个字母相等，并且已经是最后一个字符串了，则记录下来
      if (strs[j][i] == cur[i]) {
        if (j == strs.length - 1) {
          arr.push(cur[i]);
        }
      } else {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }
  return arr.join("");
};
