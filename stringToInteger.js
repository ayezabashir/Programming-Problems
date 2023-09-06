function myAtoi(s) {
    s = s.trim();

    if (s.length === 0) {
        return 0;
    }

    let sign = 1;
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') {
        s = s.slice(1);
    }

    let i = 0;
    while (i < s.length && !isNaN(parseInt(s[i]))) {
        i++;
    }

    if (i > 0) {
        let num = parseInt(s.substring(0, i)) * sign;

        const INT_MAX = Math.pow(2, 31) - 1;
        const INT_MIN = -Math.pow(2, 31);

        if (num > INT_MAX) {
            return INT_MAX;
        } else if (num < INT_MIN) {
            return INT_MIN;
        } else {
            return num;
        }
    } else {
        return 0;
    }
}

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("  -0012a42"));