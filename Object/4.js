/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        k = obj[target - nums[i]];
        if (k >= 0) {
            return [k, i];
        }
        obj[nums[i]] = i;
    }
};

console.log(twoSum(nums = [2, 7, 11, 15], target = 9))


   