var isPalindrome = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    return s === Array.from(s).reverse().join('');
};

let a = "A man, a plan, a canal: Panama";
let b = "race a car";
let c = " "

console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log(isPalindrome(c));
