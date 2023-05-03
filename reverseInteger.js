var reverse = function (x) {
    const reversed = parseFloat(
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(x);

    //   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
    if (reversed > 2147483647 || reversed < -2147483648) {
        return 0;
    }

    return reversed;
};
console.log(reverse(0123));
console.log(reverse(-123));
console.log(reverse(120));
