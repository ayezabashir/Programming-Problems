// Allows function Call only once, otherwise returns undefined

var once = function (fn) {
    let functionCall = 1;
    return function (...args) {
        if (functionCall === 1) {
            functionCall++;
            return fn(...args)
        }
    }
};

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

