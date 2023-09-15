function count(string) {
    if (string.length < 1) {
        return {};
    }
    else {
        const characters = new Map();
        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            let count = 1;
            if (characters.has(char)) {
                count = characters.get(char) + 1;
            }
            characters.set(char, count);
        }
        return Object.fromEntries(characters);
    }
}

console.log(count(''));
console.log(count('abc'));
console.log(count('abcabca'));
