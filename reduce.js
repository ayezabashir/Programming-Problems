var reduce = function (nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    else {
        return nums.reduce((acc, curr) => fn(acc, curr), init)
    }
};

// Test Case 1:
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0));

// Test Case 2:
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100));

// Test Case 3:
console.log(reduce([], function sum(accum, curr) { return 0; }, 25));

