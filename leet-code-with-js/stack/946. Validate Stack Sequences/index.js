// https://leetcode.com/problems/validate-stack-sequences/description/

/**
 * 
 * Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let  l =0; r = 0, len = pushed.length ;
  const stack = [];
  while (r < len) {
    if(stack && popped[r] === stack[stack.length -1]) {
      console.log("pop ", r, popped[r])
      stack.pop();
  console.log(stack)

      r++;
    } else if(l < pushed.length) {
      console.log("push ", l,  pushed[l])
      stack.push(pushed[l]);
    console.log(stack)
      l++;
    } else {
      console.log("ending")
      return false;
    }
  }
  // console.log(stack)
  return stack.length === 0 ? true : false
 };

// console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))
// console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))
// console.log(validateStackSequences([1,0], [1, 0]))
console.log(validateStackSequences([1,0], [0, 1]))


