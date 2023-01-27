class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int rLow = 0, rHeigh =matrix.size(), rMid;
        int cLow = 0, cHeigh =matrix[0].size(), cMid;
        int totalCol = matrix[0].size();
        int toSearchRow = 0;
        
        if(rHeigh == 1) {
            toSearchRow = 0;
        } else {
            while(rLow < rHeigh) {
                rMid = (rLow + rHeigh) / 2;
                if(target >= matrix[rMid][0] && target <= matrix[rMid][totalCol-1]) {
                    toSearchRow = rMid;
                    break;
                } else if(target < matrix[rMid][0]) {
                    rHeigh = rMid;
                } else {
                    rLow =  rMid +1;
                }
            }
        }

        while(cLow < cHeigh) {
            cMid = (cLow + cHeigh) / 2;
            if(matrix[toSearchRow][cMid] == target) {
                return true;
            } else if(target < matrix[toSearchRow][cMid]) {
                cHeigh = cMid;
            } else {
                cLow = cMid +1;
            }
        }

        return false;
    }
};