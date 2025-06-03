var merge = function(nums1, m, nums2, n) {
    let temp;
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }
    for (let i = 0; i < nums1.length - 1; i++) {
        for (let j = 0; j < nums1.length - 1 - i; j++) {
            if(nums1[j]===0){
                nums1.splice(j,1);
            }
            if (nums1[j] > nums1[j + 1]) {
                temp = nums1[j];
                nums1[j] = nums1[j + 1];
                nums1[j + 1] = temp;
            }
        }
    }
    return nums2;
};
