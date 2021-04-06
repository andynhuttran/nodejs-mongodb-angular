function f(callback) {
    setTimeout(() => {
        console.log("A");
        callback();
    }, 1000)
};

f(() => console.log("B"));