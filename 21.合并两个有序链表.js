/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/** 
 * 优化：使用递归实现
*/
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return ''
    if (!l1 || !l2) return l1 || l2
    const arr1 = listToArray(l1)
    const arr2 = listToArray(l2)
    const sortArr = arr1.concat(arr2).sort((a, b) => {
        return a.val - b.val
    })
    for (let index = 0; index < sortArr.length; index++) {
        sortArr[index].next = sortArr[index + 1]
        if (index === sortArr.length - 1) sortArr[sortArr.length - 1].next = null
    }
    return sortArr[0]
};

function listToArray(list) {
    const arr = []
    while (list) {
        arr.push(list)
        list = list.next
    }
    return arr
}
