function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

console.log(includes([2, 3, 4, 5, 6], 4));