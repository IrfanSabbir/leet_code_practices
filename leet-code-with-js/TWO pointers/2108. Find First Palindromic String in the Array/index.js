// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

/**
 
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

 */

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  for (let i =0; i < words.length ; i++) {
      const isPalindromExist = isPalindrom(words[i])
      if(isPalindromExist) return words[i]
  }
  return ""
};

var isPalindrom = function(s) {
  let l =0, r =s.length -1
  while(l < r) {
      if(s[l] !== s[r]) return false
      l++
      r--;
  }
  return true
}


console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))