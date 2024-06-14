// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

/**
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let nonDup;
    let leftP = 0, rightP =  nums.length 

    while(leftP < rightP) {
      const midP =  parseInt((leftP + rightP) /2)
      if((nums[midP - 1] !== nums[midP]) && (nums[midP + 1] !== nums[midP])) {
        nonDup = nums[midP]
        break;
      }
      if(isEven(midP)) {
        if ( nums[midP] === nums[midP -1]) {
          rightP = midP -1
        } else {
          leftP =  midP
        }
      } else {

        if (nums[midP] === nums[midP  -1]) {
          leftP = midP + 1
        } else {
          rightP =  midP
        }
      }

    }
    return nonDup;
};

const isEven = (num) => {
  return num % 2 === 0 ? true : false
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
// console.log(singleNonDuplicate([3,3,7,7,10,11,11]))
