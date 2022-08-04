// 2114. Maximum Number of Words Found in Sentences

class Solution {
public:
    int mostWordsFound(vector<string>& sentences) {
        int l = sentences.size();
        int max =0;
        int count =0;
        for(int r=0,  c=0; r<l;) {
            string word = sentences[r];
            if(c <word.size()) {
                if(word[c] == ' ') count++;
                ++c;
            } else {
                if(count> max) max = count;
                c=0;
                r++;
                count=0;
            }
        }
        return max+1;
    }
};