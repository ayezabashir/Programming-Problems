function alphabetPosition(text) {
    let result = [];
    for (let i = 0; i < text.length; i++) {
        if (/[a-zA-Z]/.test(text[i])) {
            const position = text[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            result.push(position);
        }
    }

    return result.join(' ');
}

const inputText = "The sunset sets at twelve o' clock.";
const output = alphabetPosition(inputText);
console.log(output);