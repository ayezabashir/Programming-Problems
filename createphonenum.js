// Write a function that accepts an array of
// 10 integers(between 0 and 9), that returns a string 
// of those numbers in the form of a phone number.
// e.g [1,2,3,4,5,6,7,8,9,0] => (123) 456-7890

function createPhoneNumber(numbers) {
    let first = numbers.slice(0, 3).join('');
    let second = numbers.slice(3, 6).join('');
    let third = numbers.slice(6, numbers.length).join('');
    return `(${first}) ${second}-${third}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));