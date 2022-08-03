// 1929. Concatenation of Array

class Solution {
public:
   vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        int l = n*2;
       
        int ans[l];
        for (int i =0; i<n; i++) {
            ans[i]=nums[i];
            ans[i+n] = nums[i];
        }
        std::vector<int> dest(ans, ans + l);
        return dest;
    }
};