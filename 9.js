/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    arrl = arr.length; 
    for (i = 0; i < arr.length; i++) {
        if (arr.every(function (i) {
                return i === 0;
        })) {
            return arr;
        }
    }

    for (i = 0; i < arrl; i++) {  
        if (arr[i] === 0) {
            arr.splice(arrl-1, 1); 
            arr.splice(i+1, 0, 0);
            i++;
            arr.length = arrl;
        }
    }

    return arr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))