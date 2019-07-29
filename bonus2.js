/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let arr = [];
    if (A.length === 0) {
        return "";
    }

    for (let i = 0; i < A[0].length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j][i] === A[0][i]) {
                console.log(A[j][i])
                arr.push(A[j][i])
            }
        }
    }
    
    return arr;  
};

console.log(commonChars(["bella","label","roller"]))