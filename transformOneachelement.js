// Apply Transform Over Each Element in Array

var map = function (arr, fn) {
    return arr.map((el, i) => fn(el, i))
};

//  Test Case 1;
console.log(map([1, 2, 3], function plusone(n) { return n + 1; }));

// Test Case 2;
console.log(map([1, 2, 3], function plusI(n, i) { return n + i; }));

// Test Case 3;
console.log(map([10, 20, 30], function constant() { return 42; }));