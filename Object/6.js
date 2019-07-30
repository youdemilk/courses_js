/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let obj = head.next;
    while (head != obj) {
        if (obj === null || obj.next === null) return false
        head = head.next;
        obj = obj.next.next;
    }
    return true

};