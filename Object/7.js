/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    let flag = false
    if (nums.length === 0) return flag
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) obj[nums[i]] += 1;
        else obj[nums[i]] = 1; 
    }
    console.log(obj)
    for (key in obj) {
        if (obj[key] > 1) flag = true;
    }

    return flag
};


// for (let i = 0; i < nums.length; i++) {
//     if (obj.hasOwnProperty(nums[i])) return true;
//     else obj[nums[i]] = 1; 
// }
// return false;