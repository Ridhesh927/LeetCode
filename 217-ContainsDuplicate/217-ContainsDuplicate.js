// Last updated: 8/13/2026, 8:44:35 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const count = {};

    for (let num of nums) {
        if(count[num]) {
            return true;
        }
        count[num] = true;
    }
    return false;
};