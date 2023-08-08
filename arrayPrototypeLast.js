// Using if statement
/* Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};*/

// Using ternary Operator

Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};

const array1 = JSON.parse("[1, 2, 3]");
const array2 = JSON.parse("[]");

console.log(array1.last());
console.log(array2.last());