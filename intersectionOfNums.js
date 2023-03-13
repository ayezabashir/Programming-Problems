var intersect = function (nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            arr.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]), 1);
        }
    }
    return arr;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));