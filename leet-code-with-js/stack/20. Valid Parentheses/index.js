// https://leetcode.com/problems/valid-parentheses/description/

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const pMap = {')' :'(', '}': '{', ']': '['}
    for(c of s) {
      const  isEndParnth = pMap[c]
      if(!isEndParnth) {
        stack.push(c);
        continue;
      }
      const isValidParent = pMap[c] === stack[stack.length -1]
      if (isValidParent) {
        stack.pop()
        continue;
      }
      return false
    }

    return true
};

// console.log(isValid('()'))
// console.log(isValid('(]'))
// console.log(isValid('()[]{}'))
console.log(isValid('(({[()]))'))


