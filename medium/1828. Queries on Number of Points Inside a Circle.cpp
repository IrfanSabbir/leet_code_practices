// 1828. Queries on Number of Points Inside a Circle

float getSqure(float num) {
    return num * num;
  }
class Solution {
public:
    vector<int> countPoints(vector<vector<int>>& points, vector<vector<int>>& queries) {
        vector<int> total;
        int count =0;
        
        for( int i=0, j=0; i< queries.size();) {
            if(j < points.size()) {
                float sqrRedius = getSqure(queries[i][2]);
                float distanceOfPoint = getSqure(queries[i][0] - points[j][0]) +  getSqure(queries[i][1] - points[j][1]);
              
                if(sqrRedius >= distanceOfPoint) {
                    
                    count ++;
                }
                j++;
            } else {
                total.push_back(count);
                count =0;
                i++;
                j=0;
            }
            
        }

        return total;
    }
  
};
