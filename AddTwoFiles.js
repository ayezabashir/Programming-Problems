var addTwoPromises = async function(promise1, promise2) {
    try {
        const value1 = await promise1;
        const value2 = await promise2;
        const sum = value1 + value2;
        return sum;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
