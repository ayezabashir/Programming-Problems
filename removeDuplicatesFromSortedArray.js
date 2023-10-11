function removeDuplicates(nums) {
    // Use filter to create a new array with unique elements
    const uniqueArray = nums.filter((value, index) => nums.indexOf(value) === index);

    // Copy the unique elements back to the original array
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }

    return uniqueArray.length;
}
