/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let obj = head;
    let count = 0;
    if (obj.next === null) return obj
    while (obj.next != null) {
        count++;
        obj = obj.next;
    }
    if (count % 2 === 0) count = parseInt(count/2)
    else count = parseInt(count/2) + 1;
    
    while (count > 1) {
        head = head.next;
        count--;
    }
    
    obj = head;
    while (obj.next != null) {
        obj = obj.next;
        return obj
    }

};