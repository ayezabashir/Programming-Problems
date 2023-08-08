// Given a positive integer millis, write an asynchronous
// function that sleeps for millis milliseconds. 
// It can resolve any value.

function sleepAsync(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
}

async function main() {
    console.log("Sleeping for 2000 milliseconds...");
    await sleepAsync(2000);
    console.log("Awake now!");
}
main();
