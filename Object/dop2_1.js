/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function(stones) {
    let obj = {};
    if (stones.length === 0) return 0;
    if (stones.length === 1) return stones[0];
    for (let i = 0; i < stones.length; i++) {
        obj[i] = stones[i]
    }
    let curr = 1000;
    let max1 = 0;
    let max2 = 0;
    let arr = []
    while (Object.keys(obj).length != 1) {
        arr = Object.values(obj)
        if ( Object.values(obj).length === 2 &&  Object.values(obj)[0] ===  Object.values(obj)[1]) return 0;
        max1 = Math.max.apply(null, arr); 
        arr.splice(arr.indexOf(max1), 1);    
        max2 = Math.max.apply(null, arr); 
        arr.splice(arr.indexOf(max2), 1)
        delete obj[Object.keys(obj).find(key => obj[key] === max1)];
        delete obj[Object.keys(obj).find(key => obj[key] === max2)];
        if (max2 < max1) {
            obj[curr] = max1 - max2
            curr++
        } 
    }
    return Object.values(obj)[0]
};