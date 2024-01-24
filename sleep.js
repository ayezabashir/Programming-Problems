function sleepAsync(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function main() {
    console.log("Sleeping for 1000 milliseconds...");
    await sleepAsync(1000);
    console.log("Awake now!");
}

main();
