// using regular expressions
function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('aA11'));

// [^]: This part means "any character." Imagine it's like a detective looking for
// any letter or symbol in a text.

// \1+: Here, the \1 means "the same as the first thing we found."
// So if the detective found the letter 'a,' it's looking for more 'a's.
// The + says, "keep looking for more of the same."

// /g: The / at the start and end is like putting a fence around
// the area to search. The g means "look everywhere in the text,
//  not just once."