// https://leetcode.com/problems/sort-colors/description/

/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 */


// Solution using bucket sort

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsBucketSort = function(nums) {
  let red =0, white =0, blue =0;
  for(let i = 0; i < nums.length ; i++) {
      if(nums[i] === 0) {
          red++;
      } else if(nums[i] === 1) {
          white++;
      } else {
          blue++;
      }
  }
  for(let i = 0; i < nums.length ; i++) {
      if(red > 0) {
          nums[i] = 0;
          red--;
      } else if(white > 0) {
          nums[i] = 1;
          white--;
      } else {
          nums[i] = 2;
          blue--;
      }
  }
};

// Solution using partition sort

var sortColors = function(nums) {
  let l =0, r = nums.length -1, i = 0;
  while(i <= r) {
    if(nums[i] === 0 ) {
      nums[i] = nums[l]
      nums[l] = 0;
      l++
    } 
    else if(nums[i] === 2) {
      nums[i] = nums[r]
      nums[r] = 2;
      r--;
      i--
    }
    i++;

  }
}

console.log(sortColors([2,0,2,1,1,0]))
// console.log(sortColors([2,0,1]))
