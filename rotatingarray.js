// ouput = 3,4,5,6,7,1,2

// Method 1
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        let j = nums.pop();
        nums.unshift(j);
    }
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 5));

// Method 2
function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
