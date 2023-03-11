// Given an integer array nums, return true if any value appears 
// at least twice in the array, and return false
//  if every element is distinct.

var containsDuplicate = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));