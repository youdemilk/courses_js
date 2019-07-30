/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1.hasOwnProperty(s[i])) obj1[s[i]] += 1;
        else obj1[s[i]] = 1;
        if (obj2.hasOwnProperty(t[i])) obj2[t[i]] += 1;
        else obj2[t[i]] = 1;
    }
    for(var key in obj1){
        if(obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};