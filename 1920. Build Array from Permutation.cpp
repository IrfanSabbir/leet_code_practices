//  1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/

class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        int n=nums.size();
        int res[n];
        
         for(int i =0; i<n; i++) {
            res[i]= nums[nums[i]];
          }
        for(int i=0;i<n;i++){
            nums[i]=res[i];
            }

        return nums;
    }
};