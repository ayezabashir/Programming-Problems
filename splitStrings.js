function solution(str) {
    let newArr = [];
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length; i += 2) {
            newArr.push(str.substring(i, i + 2));
        }
    } else {
        for (let i = 0; i < str.length; i += 2) {
            if (i === str.length - 1) {
                newArr.push(str[i] + '_');
            } else {
                newArr.push(str.substring(i, i + 2));
            }
        }
    }
    return newArr;
}

console.log(solution('abc'));      // Outputs: [ 'ab', 'c_' ]
console.log(solution('abcdef'));   // Outputs: [ 'ab', 'cd', 'ef' ]
