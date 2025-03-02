var sortBy = function(arr, fn) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (fn(arr[j]) > fn(arr[j + 1])) {
                // Swap correctly
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

// Example Test Cases
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); 
// Output: [1, 2, 3, 4, 5]

console.log(sortBy([{x: 1}, {x: 0}, {x: -1}], (d) => d.x)); 
// Output: [{x: -1}, {x: 0}, {x: 1}]

console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])); 
// Output: [[10, 1], [5, 2], [3, 4]]
