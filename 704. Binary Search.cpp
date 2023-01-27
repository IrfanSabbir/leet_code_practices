class Solution {
public:
    int middleIndex(int l, int r) {
        return (l+r)/2;
    }
    int search(vector<int>& nums, int target) {
        int left, right, mid;
        left = 0;
        right = nums.size();
        while(left < right) {
            mid = middleIndex(left,right);
            if(target == nums[mid]) return mid;
            else if(target < nums[mid]) right = mid;
            else left = mid+1;
        }
        return -1;
    }
};