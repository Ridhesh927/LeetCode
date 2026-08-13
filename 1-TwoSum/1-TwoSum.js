// Last updated: 8/13/2026, 8:45:12 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = {};

    for(i=0; i< nums.length;i++) {

        let num = nums[i];
        let needed = target - num;

        if (needed in map) {
            return [map[needed] , i] ;
        }

        map[num] = i;

    }

};