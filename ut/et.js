function evaluateDataflow() {
    return new Promise((resolve, reject) => {
        // Simulate dataflow evaluation with a timeout
        setTimeout(() => {
            console.log('Dataflow evaluation completed.');
            resolve();
        }, 2000); // Assume it takes 2 seconds to complete
    });
}

// Using .then() to track completion
evaluateDataflow().then(() => {
    console.log('Dataflow tracking: Evaluation has completed.');
});

// Using async/await to track completion
async function trackDataflow() {
    await evaluateDataflow();
    console.log('Dataflow tracking (async/await): Evaluation has completed.');
}

trackDataflow();
