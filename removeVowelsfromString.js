function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

let a = disemvowel('This website is for losers LOL!');
console.log(a);