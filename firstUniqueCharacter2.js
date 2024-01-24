var firstUniqChar = function (s) {
    //charCounts will be used to store the frequency of each character in the string
    let charCounts = {};

    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
    }

    // Find the first unique character and return its index
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCounts[char] === 1) {
            return i;
        }
    }

    return -1; // No unique character found
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));