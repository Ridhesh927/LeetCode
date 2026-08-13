// Last updated: 8/13/2026, 8:44:37 PM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePos = 0;

    for(let i =0; i  < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[writePos] = nums[i];
            writePos++;
        }
    }
    for(let i = writePos; i < nums.length; i++) {
        nums[i] = 0;
    }
};