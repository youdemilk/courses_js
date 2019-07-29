/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = Math.pow(A[i], 2);
    }
    A.sort(function(a,b) {
        return a-b;
    });
    return A;
};

console.log(sortedSquares([-4,-1,0,3,10]))