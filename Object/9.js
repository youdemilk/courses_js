/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let fill_arr = [];
    let arr = [];
    let obj1 = {};
    let obj2 = {};
    
    if (nums1.length < nums2.length) {
        let k = nums2;
        nums2 = nums1;
        nums1 = k;
    }
    
    for (let i = 0; i < nums1.length; i++) {
        if (obj1.hasOwnProperty(nums1[i])) obj1[nums1[i]] += 1;
        else obj1[nums1[i]] = 1;
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (obj2.hasOwnProperty(nums2[i])) obj2[nums2[i]] += 1;
        else obj2[nums2[i]] = 1;
    }


    for(var key in obj2){
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] < obj2[key]) {
                arr = Array(obj1[key]).fill(key)
            } else {
                arr = Array(obj2[key]).fill(key) 
            }
        fill_arr.push(...arr)
        }
    }
    return fill_arr;
};