// https://leetcode.com/problems/daily-temperatures/description/

/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
 */



/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result  = new Array(temperatures.length).fill(0)
    const mapStack= [] //[{value: , key: }]
    temperatures.forEach((value, key) => {
      while (mapStack.length > 0 && mapStack[mapStack.length -1].value < value) {
        const topOfStack = mapStack[mapStack.length -1];
        result[topOfStack.key] = key - topOfStack.key;
        mapStack.pop();
      }
      mapStack.push({value, key})

    })
    return result
};

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
// console.log(dailyTemperatures([30,40,50,60]))
// console.log(dailyTemperatures([30,60,90]))
