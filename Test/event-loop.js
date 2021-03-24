let racer = function () {
    setImmediate(() => console.log("Immediate 0"));
    //console.log("main line");
    //process.nextTick(() => console.log("nextTick"));

    //setTimeout(() => console.log("timeout 10"), 10);
    setTimeout(() => console.log("timeout 0"), 0);

    // for (let i = 0; i < 3; ++i) {
    //     setImmediate(() => console.log(`Immediate ${i + 1}`));
    // }
}

racer();