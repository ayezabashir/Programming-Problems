// digital root of a number is the recursive sum of its digits 
// until a single-digit number is obtained. 

function digitalRoot(n) {
    let arr = Array.from(String(n));
    let sum = arr.reduce((accumultaor, current) => accumultaor + Number(current), 0);
    if (sum < 10) {
        return sum;
    } else {
        return digitalRoot(sum);
    }
}

console.log(digitalRoot(132189))  // Output: 6
console.log(digitalRoot(23))// Output: 5
console.log(digitalRoot(856288))  // Output: 2
