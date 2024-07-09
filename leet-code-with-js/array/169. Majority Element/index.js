/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let res = nums[0]
  let counter = 0;
  // Boyer-Moore Majority Vote algorithm
  for(num of nums) {
      if(counter === 0) {
          res = num;
          counter = 1;
      } else if(res ===  num) {
          counter++;
      } else {
          counter--;
      }
  }
  // using 0(n) space with map
  // let currentMax = -Infinity
  // let map = new Map()
  // for(let num of nums) {
  //     map.set(num, (map.get(num) || 0) +1)
  //     if(map.get(num) > currentMax) {
  //         res = num;
  //         currentMax = map.get(num) 
  //     }
  // }
  return res
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
