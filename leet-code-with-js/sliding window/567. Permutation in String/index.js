// https://leetcode.com/problems/permutation-in-string/description/


/**
  Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

  In other words, return true if one of s1's permutations is the substring of s2.

  

  Example 1:

  Input: s1 = "ab", s2 = "eidbaooo"
  Output: true
  Explanation: s2 contains one permutation of s1 ("ba").
  Example 2:

  Input: s1 = "ab", s2 = "eidboaoo"
  Output: false

 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


const checkInclusion = function(s1, s2) {

  let mactcher = 0
  const s1Map = new Map()
  const s2Map = new Map()
  for( let i =0; i <26; i++) {
    s1Map.set(String.fromCharCode(97+i), 0);
    s2Map.set(String.fromCharCode(97+i), 0);
  }

  for (let i =0; i <s1.length; i++) {
    s1Map.set(s1[i],  s1Map.get(s1[i]) + 1);
    s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
  }
  
  mactcher = matcherCount(s1Map, s2Map)
  if(mactcher === 26) return true;


  for(let left =1, right = s1.length; right < s2.length ; left++, right++ ) {
      s2Map.set(s2[left-1], s2Map.get(s2[left-1]) -1)
      s2Map.set(s2[right], s2Map.get(s2[right]) + 1)
      mactcher = matcherCount(s1Map, s2Map)
      if(mactcher === 26) break;
  }

  return mactcher === 26 ? true : false;
};

const matcherCount = (s1Map, s2Map) => {
  let mactcher = 0;

  s1Map.forEach((value, key)=> {
    if(value === s2Map.get(key)) {
      mactcher++;
    }
  })
  return mactcher
}

// console.log(checkInclusion("ab", "eidbaooo"))
// console.log(checkInclusion("ab", "eidboaoo"))
// console.log(checkInclusion("abc", "baxyzabc"))
// console.log(checkInclusion("abc", "bbbca"))

// console.log(checkInclusion("hello", "ooolleoooleh"))
console.log(checkInclusion("abcdxabcde", "abcdeabcdx"))



