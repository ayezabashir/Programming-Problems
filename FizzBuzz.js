var fizzBuzz = function (n) {
    var arr = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push("" + i + "");
        }
    }
    return arr;
};

console.log(fizzBuzz(3));  // ['1', '2', 'Fizz']
console.log(fizzBuzz(15)); // ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
