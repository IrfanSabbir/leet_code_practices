// https://leetcode.com/problems/reverse-string/description/


/**
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = 0, r = s.length -1;
  while(l<r) {
      s[r] = String.fromCharCode(s[l].charCodeAt(0) + s[r].charCodeAt(0));
      s[l] = String.fromCharCode(s[r].charCodeAt(0) - s[l].charCodeAt(0));
      s[r] = String.fromCharCode(s[r].charCodeAt(0) - s[l].charCodeAt(0));
      l++;
      r--;
  }
  return s
};

console.log(reverseString(["h","e","l","l","o"]))
