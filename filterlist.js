function filter_list(l) {
    return l.filter(item => typeof item === 'number' && !isNaN(item));
}

let a = [1, 2, 'a', 'b'];
let b = [1, 'a', 'b', 0, 15];
let c = [1, 2, 'aasf', '1', '123', 123];

console.log(filter_list(a));
console.log(filter_list(b));
console.log(filter_list(c));
