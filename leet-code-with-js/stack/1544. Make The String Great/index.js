// https://leetcode.com/problems/make-the-string-great/

/**
 * Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

 

Example 1:

Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let stack =[]

  for (let i = s.length -1  ; i >= 0; i--) {
    if(stack.length > 0 && 
      ((s[i].toUpperCase() === stack[stack.length-1] && s[i] !== s[i].toUpperCase())
       || (s[i].toLowerCase() ===stack[stack.length-1] && s[i] !== s[i].toLowerCase())
    )){
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.reverse().join("")
};

// console.log(makeGood("leEeetcode"))
// console.log(makeGood("abBAcC"))
console.log(makeGood("Pp"))
