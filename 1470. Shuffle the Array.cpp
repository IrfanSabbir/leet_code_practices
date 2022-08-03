// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

// Solution 1:

class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        
        vector<int>ans (2*n , 0);

        for(int i =0, j=0; j<n ; i+= 2, j++;) {
            ans[i] = nums[j];
            ans[i+1] = nums[j+n];
        }

        return ans;
    }
};

// Solution 2:

class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        int arr1[n];
        int arr2[n];

      for(int i =0; i<n ; i++) {
          arr1[i]=nums[i];
          arr2[i] = nums[i+n];
        }
      for(int i =0, j=0; j<n ; i+= 2) {
          nums[i]= arr1[j];
          nums[i+1]= arr2[j];
          j++;

      }
        return nums;
    }
};

