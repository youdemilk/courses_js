/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let curr = '';
    if (A.length === 0) {
        return "";
    }
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].split('');
    }
    for (let h = 1; h < A.length; h++) {
        for (let i = 0; i < A[0].length; i++) {
            for (let j = 0; j < A[h].length; j++) {
                if (A[0][i] === A[h][j]) {
                    curr += A[0][i];
                    A[h].splice(j, 1);
                    break;
                }
            }
        }
        A[0] = curr;
        curr = '';
    }
    A[0] = A[0].split('');
    return A[0];  
};