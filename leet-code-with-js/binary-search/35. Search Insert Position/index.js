// https://leetcode.com/problems/search-insert-position/description/

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    

    Example 1:

    Input: nums = [1,3,5,6], target = 5
    Output: 2

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0, r = nums.length ;
  let result = -1;

  while(l < r) {
    const m = parseInt((r+l)/2)
    if(nums[m] === target) {
      result = m;
      break;
    }
    else if (target < nums[m]) {
      r = m
    } else if (target > nums[m]) {
      l = m +1
    }
  }
  // console.log(r)
  if(result === -1) {
    result = r < 0 ? 0 : r
  }
  return result
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1,3], 2))

