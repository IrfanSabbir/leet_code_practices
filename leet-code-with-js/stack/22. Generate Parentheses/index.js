// https://leetcode.com/problems/generate-parentheses/description/

/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

// const sum = function (s, n) {

//   if(n === 0) return 0;
//   else {

//     console.log(n, s)
//     s =  n + sum(s, n-1)
//     console.log(n, s)

//     return s
//   }
// }

// const fact = function (s ,n) {

//   if(n === 0) return 1;
//   else {
//     s =  n * fact(s, n-1)
//   console.log(s, n)

//     return s
//   }
// }
// let r = fact(1,  5)
// console.log(r)


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const stack =[]
    const backtrack = ( open, close) => {
      if (open ===  n  && close === n) {
        res.push(stack.join(''))
        return
      }
      if (open < n) {
        stack.push('(')
        backtrack(open + 1, close)
        stack.pop();
      } 
      if (close < open) {
        stack.push(')')
        backtrack( open, close + 1)
        stack.pop();
        
      }
    }

    backtrack(0, 0);
    return res

    };


console.log(generateParenthesis(5))