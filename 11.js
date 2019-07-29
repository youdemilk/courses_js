/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let arr = [];
    while (K > 0) {
        arr.push(K % 10);
        K = parseInt(K / 10);
    }
    arr.reverse();
    if (A.length < arr.length) {
        let k = arr;
        arr = A;
        A = k;
    }
    let count = arr.length - 1;
    for (let i = A.length - 1; i > A.length - arr.length - 1; i--) {
        A[i] += arr[count];
        count--;
        // console.log(A[i])
        if (A[i] >= 10) {
            let j = i;
            while (A[j] >= 10 && j > 0) {
                A[j - 1] += 1;
                A[j] -= 10;
                j--;
            }
            if (A[0] >= 10) {
                A.unshift(1);
                A[1] -= 10;
            }
        }
    }
    return A;
};

console.log(addToArrayForm(A = [2,7,4], K = 181))