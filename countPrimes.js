var countPrimes = function (n) {
    let primes = new Array(n).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) // meaning if the value is "true"
        {
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++; // count the ones which are true
        }
    }
    return count;
};


console.log(countPrimes(10));