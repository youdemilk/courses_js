/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if (obj.hasOwnProperty(A[i])) obj[A[i]] += 1;
        else obj[A[i]] = 1; 
    }

    for (key in obj) {
        if (obj[key] === Math.round(A.length/2)) return key;
    }
};

console.log(repeatedNTimes([1,2,3,3]))