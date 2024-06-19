// https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * 
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length -1 
    let l = 0, r =  n
    let result  =  Array(n).fill(-1)

    for (; n >=0 ; n --) {
      if(Math.abs(nums[l]) > Math.abs(nums[r])) {
        result[n] = nums[l] * nums[l];
        l++;
      } else {
        result[n] = nums[r] * nums[r];
        r--;
      }
    }
    return result
};

console.log(sortedSquares([-4,-1,0,3,10])) 
console.log(sortedSquares([-7,-3,2,3,11])) 
