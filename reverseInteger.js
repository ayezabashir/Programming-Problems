var reverse = function (x) {
    // parseFloat() function is used to accept a string and convert it into a floating-point number
    const reversed = parseFloat(
        x
            .toString() // to convert it into a string.
            .split('')  // splits the string into an array of individual characters
            .reverse()  // reverses the order of its elements
            .join('')   // concatenates its elements into a single string
    ) * Math.sign(x);  // ensures that the resulting number has the same sign as the original input number. 

    //   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
    if (reversed > 2147483647 || reversed < -2147483648) {
        return 0;
        // The value 2147483647 is the maximum value for a 32-bit signed integer.
        //  It is commonly used as a threshold value for checking whether
        //  an integer has exceeded the maximum limit.
    }

    return reversed;
};
console.log(reverse(0123));
console.log(reverse(-123));
console.log(reverse(120));
