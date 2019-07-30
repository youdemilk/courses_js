/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        obj[J[i]] = J[i]
    }
    
    for (let i = 0; i < S.length; i++) {
        if (obj[S[i]]) count++
    }
    
    return count
};