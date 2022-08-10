// 807. Max Increase to Keep City Skyline

class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        int count =0;
        
        int n =  grid.size();
        int r_max =0;        
        int c_max =0;

        vector<int> col;
        vector<int> row;

            
        for(int r=0, c=0; r <n;) {
            if(c<n) {
               if(grid[r][c] > r_max) r_max = grid[r][c] ;
                c++;
            } else {
                row.push_back(r_max);
                r_max =0;
                c = 0;
                r++;
            }

        }
       
         for(int r=0, c=0; c <n;) {
            if(r<n) {
               if(grid[r][c] > c_max) c_max = grid[r][c] ;
                r++;
            } else {
                col.push_back(c_max);
                c_max =0;
                r = 0;
                c++;
            }

        }
        
        for(int r=0, c=0; r <n;) {
            if(c<n) {
               int min = row[r];
               if( row[r] > col[c] ) min = col[c];
                
                count += min - grid[r][c];
                c++;
                   
               
            } else {
               c=0;
               r ++;
            }

        }
        
       
        return count;
    }
};