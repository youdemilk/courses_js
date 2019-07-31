/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj1 = new Set(nums1);
    let obj2 = new Set(nums2);
    let arr = [];
    
    if (nums1.length < nums2.length) {
        let k = nums2;
        nums2 = nums1;
        nums1 = k;
    }

    obj2.forEach(el => {
        if (obj1.has(el)) arr.push(el)
    });
    return arr;
};