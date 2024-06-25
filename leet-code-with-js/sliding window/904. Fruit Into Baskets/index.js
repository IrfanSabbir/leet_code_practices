// https://leetcode.com/problems/fruit-into-baskets/description/

/**
 
  You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

  You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

  You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
  Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
  Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
  Given the integer array fruits, return the maximum number of fruits you can pick.

  

  Example 1:

  Input: fruits = [1,2,1]
  Output: 3
  Explanation: We can pick from all 3 trees.
 */

  /**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const baskets = new Map();
  let max = 0;
  let l = 0, r = 0, currentMax = 0;
  for( f of  fruits) {
    baskets.set(f, baskets.get(f) + 1  || 1)

    while(baskets.size> 2) {
      baskets.set(fruits[l], baskets.get(fruits[l]) - 1 )
      if(baskets.get(fruits[l]) === 0) {
        baskets.delete(fruits[l])
      }
      l++;
    }
    max = Math.max(max, r-l+1)
    r++;
  }
  return max
};

// console.log(totalFruit([1,2,1]))
// console.log(totalFruit([0,1,2,2]))
// console.log(totalFruit([1,2,3,2,2]))
// console.log(totalFruit([0]))
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))
// console.log(totalFruit([3,3,3,3,3,3]))
// console.log(totalFruit([0,1,6,6,4,4,6]))
// console.log(totalFruit([1,0,1,4,1,4,1,2,3]))
// console.log(totalFruit([1,1,6,5,6,6,1,1,1,1]))



