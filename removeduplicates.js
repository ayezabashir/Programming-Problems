// removing duplicates from array

// METHOD 1 
const removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(i, 1);
                break;
            }
        }
    }
};
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr);
console.log(arr);

// METHOD 2
const uniquevalues = function (nums) {
    return [...new Set(nums)];
}
// const uniquevalues = nums => [...new Set(nums)]; //using arrow function
console.log(uniquevalues([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));