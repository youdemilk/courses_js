/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            // console.log(nums)
            nums.splice(i, 1);
        }
    }  
    return nums.length
};

console.log(removeElement([3, 2, 2, 3], 3))