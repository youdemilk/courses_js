/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let count = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += count;
        // console.log(digits[i])
        if (digits[i] >= 10) {
            digits[i] -= 10;
            count = 1;
        } 

        else {
            count = 0;
        }
    }
    if (count) {
        digits.unshift(1);
    }

    return digits
};

console.log(plusOne(
    [2,9,9,9]))