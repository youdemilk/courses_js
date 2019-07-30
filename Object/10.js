/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1.hasOwnProperty(s[i]) || obj2[s[i]]) {
            delete obj1[s[i]];
            obj2[s[i]] = i;
        }
        else obj1[s[i]] = i; 
    }
    let keys = Object.keys(obj1)
    if (keys.length) return obj1[keys[0]] 
    return -1
};