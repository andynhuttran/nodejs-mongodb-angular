function calculateFibo(n){
    let first = 1;
    let second = 1;
    if (n <= 0) return 0;
    if (n == 1 || n == 2) return second;

    let res = 0;
    for (let i = 3; i <= n; ++i){
        res = first + second;
        first = second;
        second = res;
    }
    return res;
}

//listen event from parent
process.on('message', (n) => {
    let res = calculateFibo(n);
    process.send(res); //send back to parent
    process.exit(1);
});

