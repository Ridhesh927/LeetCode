// Last updated: 8/13/2026, 8:44:55 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result = 0;
    for(let num of nums) {
        result ^=num;
    }
    return result;
};

