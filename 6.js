/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums[nums.length-1] > nums[nums.length-2]) {
        return nums.length-1;
    }

    if (nums[0] > nums[1]) {
        return 0;
    }

    if (nums.length === 1) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {   
        if (nums[i] > nums[i+1] && nums[i] > nums[i-1]) {
            return i;
        }
    }
};

console.log(findPeakElement([1,2]))