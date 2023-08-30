// Remove Vowels from any string

function disemvowel(str) {
    let regex = /(a)|(e)|(i)|(o)|(u)|(A)|(E)|(I)|(O)|(U)/g;
    return str.replace(regex, '');
}

let a = disemvowel('This website is for losers LOL!');
console.log(a);