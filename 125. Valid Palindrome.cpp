class Solution {
public:
    bool isPalindrome(string s) {
        int left =0, right = s.length()-1;
        while(left < right) {
            if(!isalnum(s[left])) left++;
            else if(!isalnum(s[right])) right--;
            else if(tolower(s[left]) != tolower(s[right])) return false;
            else {left++; right--;}
        }
     
        return true;
        // bool isPalindrome = true;

        // string alphaNumeric = "";
        // for(auto c: s) {
        //     cout <<!isalnum(c)<<endl;
        //     if((c >= 'a'+0 && c <= 'a'+25) || (c >= 'A'+0 && c <= 'A'+25) || (c >= '0'+0 && c <= '0'+9)) {
        //         alphaNumeric += tolower(c);
        //     }
        // }
        // int stringLength = alphaNumeric.length();

        // if(stringLength > 0) {
        //     for(int i=0; i <= stringLength /2 ; i++) {
        //         if(alphaNumeric[i] != alphaNumeric[stringLength-1-i]) {
        //             isPalindrome = false;
        //             break;
        //         }
        //     }
        // }
        
   
        // return isPalindrome;
    }
};