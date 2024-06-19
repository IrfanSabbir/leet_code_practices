// https://leetcode.com/problems/valid-palindrome-ii/description/

/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l =0, r = s.length -1
  while (l < r) {
      if(s[l] != s[r]) {
          return isPalindrom(s, l, r-1) || isPalindrom(s, l +1, r)
          // const subStr1 = s.substring(l, r) 
          // console.log(subStr1)
          // const subStr2 = s.substring(l+1, r+1)
          // console.log(subStr2)

          // return subStr1 === subStr1.split('').reverse().join('') || subStr2 === subStr2.split('').reverse().join('')
      } 
      l++;
      r--;
  }
  return true;
};

var isPalindrom = function(s, l, r) {
  while(l < r) {
      if(s[l] !== s[r]) {
          return false
      }
      l++;
      r--;
  }
  return true
}


// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
