// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/

/**
 * You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

 

Example 1:

Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  const mod = 1000000007 ;
  let res = 0;
  let r =nums.length -1;
  const arr = [];
  let num = 1;
  nums.sort((a,b) => a-b)
  for (let i = 0; i < nums.length; i++) 
    {
        arr.push(num);
        num = num * 2 % mod;
    }
  for(let l = 0; l < nums.length ; l++ ) {
    if(nums[l] * 2 <= target) {

      while( r && nums[l] + nums[r] > target ) {
        r -= 1;
      }
      res = (res + arr[r-l]) % mod
      // if(r ) {
      //   console.log(Math.pow(2, r-l) % mod)
      //   console.log((Math.pow(2, r-l) % mod) + res)
  
  
      //   res +=  Math.pow(2, r-l)
      //   res = res % mod
      // }
    }
  }
  return res;
};
console.log(numSubseq([2,3,3,4,6,7],12))
// console.log(numSubseq([3,5,6,7],9))
// console.log(numSubseq([3,3,6,8],10))
console.log(numSubseq([9,25,9,28,24,12,17,8,28,7,21,25,10,2,16,19,12,13,15,28,14,12,24,9,6,7,2,15,19,13,30,30,23,19,11,3,17,2,14,20,22,30,12,1,11,2,2,20,20,27,15,9,10,4,12,30,13,5,2,11,29,5,3,13,22,5,16,19,7,19,11,16,11,25,29,21,29,3,2,9,20,15,9],32))

