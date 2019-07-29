/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                arr.push(arr2[i]);
            }
        }
        arr1 = arr1.filter(el => el != arr2[i]).sort((a,b) => a - b);
    }
    
    arr = arr.concat(arr1)

    return arr;
};

console.log(relativeSortArray(arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]))