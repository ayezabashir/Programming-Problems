var merge = function(nums1, m, nums2, n) {
    let temp;
    let nums3 = [];
    for (let i = 0; i < m; i++) {
        nums3.push(nums1[i]);
    }
    for (let i = 0; i < n; i++) {
        nums3.push(nums2[i]);
    }
    for (let i = 0; i < nums3.length - 1; i++) {
        for (let j = 0; j < nums3.length - 1 - i; j++) {
            if (nums3[j] > nums3[j + 1]) {
                temp = nums3[j];
                nums3[j] = nums3[j + 1];
                nums3[j + 1] = temp;
            }
        }
    }
    return nums3;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); 
