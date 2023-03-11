// Given a non-empty array of integers nums, every 
// element appears twice except for one. 
// Find that single one.

var singleNumber = function (nums) {
    let frequency = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (frequency.has(nums[i])) {
            frequency.set(nums[i], frequency.get(nums[i]) + 1);
        } else {
            frequency.set(nums[i], 1);
        }
    }
    for (let [key, value] of frequency) {
        if (value === 1) {
            return key;
        }
    }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));