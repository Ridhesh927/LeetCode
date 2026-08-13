// Last updated: 8/13/2026, 8:44:38 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const n = nums.length;

    const expectedSum = (n * (n + 1)/ 2);

    const actualSum = nums.reduce((sum,nums)=> sum + nums ,0);

    return expectedSum - actualSum; 
};