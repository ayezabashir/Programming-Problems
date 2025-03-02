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

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); 
console.log(sortBy([{x: 1}, {x: 0}, {x: -1}], (d) => d.x)); 
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])); 
