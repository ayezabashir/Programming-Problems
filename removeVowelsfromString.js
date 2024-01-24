// Remove Vowels from any string

function disemvowel(str) {
    // g stands for global
    // i stands for case-insensitive
    return str.replace(/[aeiou]/gi, '');
}

let a = disemvowel('This website is for losers LOL!');
console.log(a);