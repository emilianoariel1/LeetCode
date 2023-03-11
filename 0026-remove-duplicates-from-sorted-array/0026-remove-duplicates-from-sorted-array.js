/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        
        let count = 0;
        let j = i;

        if (nums[i] == nums[i+1]) {
            while (nums[i] == nums[++j]) {
                count++;
            }
            
            nums.splice(i, count)
            i - count;
        }

    }

    return nums.length;
}; 