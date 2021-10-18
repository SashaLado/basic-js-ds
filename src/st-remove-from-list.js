const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(/* l, k */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

function check {
if (l == null){
  return l;
}
while(l.value == k && l != null){
  l = l.next;
  if (l == null)
    break;
}
if (l == null){
  return l;
}
ListNode c = l;
while(c.next != null){
  if ((int)(c.next.value) == k){
    c.next = c.next.next;
  }else{
    c=c.next;
  }
}
return l;
}
