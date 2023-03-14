/* Day 1
* you may assume the node class is:
* class LLNode {
*    constructor(value, next = null ) {
*        this.value = value;
*        this.next = next;
*    }
* }
*/
function deleteMiddleNode(head) {
/* your code here */
}

//given a linked list, delete the middle node. 
//If the list is even length, delete the node at the start of the second half of the list.

//Think upfront to analyze what the problem is and prevent debugging. 
//Stay organized in your method.

//Many linked list problems modifying the list can be simplified by
//temporarily inserting an extra node as the head.
//let tempHead = new LLNode(Infinity, head);

//A fast slow pattern, 2:1.
let slow = tempHead;
let fast = head?.next;

while (fast) {
slow = slow.next;
//slow moves ahead one.
fast = fast.next?.next;
//fast moves ahead two.
}

//Fast moved off the end to null, slow is half-way.
//update the slow pointer (slow = slow.next) next to skip the node after it.
slow.next = slow.next ? slow.next.next : null;

// return the real head, not temporary.
return tempHead.next;
}
