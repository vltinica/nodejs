const infoLog = (text) => {
    console.log(text, performance.now().toFixed(2));
};

function info(text) {
    infoLog("Program_Start!");
}

info("Program_Start!");

setTimeout(() => {
    infoLog("Time_Out!"), 0;
});

function fib(n) {
    if (n <= 1) {
        return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}

console.log(fib(5));

infoLog("Program_End!");
