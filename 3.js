/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    
    if (s == "") {
        return 0;
    }
    
    else {
        s = s.split(" ");
        return s[s.length-1].length;
    }

};

console.log(lengthOfLastWord("hello world"))