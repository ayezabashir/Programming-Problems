var solution = function(isBadVersion) {   
    return function(n) {
        let low = 1;
        let high = n;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (isBadVersion(mid)) {
                high = mid; 
            } else {
                low = mid + 1; 
            }
        }

        return low; 
    };
};
