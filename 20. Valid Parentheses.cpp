class Solution {
public:
    bool isValid(string s) {
        stack<char> parenthesesStack;
        parenthesesStack.push(s[0]);
        for(int i=1; i<s.length();i++) {
            
            if(s[i] == ')' || s[i] == '}' || s[i] == ']') {
                if(parenthesesStack.empty()) return false;
                else if (s[i] ==')' && parenthesesStack.top() != '(') return false;
                else if (s[i] == '}' && parenthesesStack.top() != '{') return false;
                else if (s[i] == ']' && parenthesesStack.top() != '[') return false;
                parenthesesStack.pop();
            } else {
                parenthesesStack.push(s[i]);
            }
        }
        if(!parenthesesStack.empty()) return false;
        else return true;
    }
};