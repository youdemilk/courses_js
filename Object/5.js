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
var deleteDuplicates = function(head) {
    let obj = head;
    if (obj === null || obj.next === null) return obj
    while (obj.next != null) {
        if (obj.val === obj.next.val) {
            obj.next = obj.next.next;
        }
        
        else {
            obj = obj.next
        }
    }
    
    return head
   
};