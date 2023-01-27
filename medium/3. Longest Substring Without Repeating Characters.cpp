class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int subString = 0;
        int longestSub = 0;
        for(int i=0; i< s.length(); i++) {
            int k = 0;
            if(i == 0 ) {
                subString +=1;
                k=-1;
            } else {
                k = i-1;
                while(k >= i-subString) {
                    if (s[i] != s[k]) {
                        k--;
                    } else {
                        break;
                    }
                }
                
            }
            subString = i-k;
            longestSub =  max(longestSub, i-k);
          
        }
        return longestSub;
    }
};