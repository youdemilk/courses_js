/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    return nums[parseInt(nums.length/2)]
};

console.log(majorityElement([1,2,2,3,3,3]));