function duplicateCount(inputString) {
    let toLower = inputString.toLowerCase();
    let storedValue = [];
    for (let i = 0; i < toLower.length; i++) {
        for (let j = toLower.length - 1; j > i; j--) {
            if (toLower[i] === toLower[j] && !storedValue.includes(toLower[j])) {
                storedValue.push(toLower[i]);
            }
        }
    }
    return storedValue.length;
}

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('aA11'));

