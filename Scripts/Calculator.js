// Description:
// A command-line scientific calculator that supports a variety of mathematical operations, including addition, subtraction, 
// multiplication, division, power, sine, cosine, tangent, logarithm, and exponential functions. 

// Usage:
// node Calculator.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    pow: (x, y) => Math.pow(x, y),
    sin: (x) => Math.sin(x * Math.PI / 180),
    cos: (x) => Math.cos(x * Math.PI / 180),
    tan: (x) => Math.tan(x * Math.PI / 180),
    log: (x) => Math.log(x),
    exp: (x) => Math.exp(x)
};

console.log("Welcome to the Scientific Calculator!");
console.log("Available operations: add, subtract, multiply, divide, sin, cos, tan, log, exp, pow, quit");

const getOperation = () => {
    rl.question("Enter operation: ", (operation) => {
        if (operation === 'quit') {
            rl.close();
            return;
        }

        if (['add', 'subtract', 'multiply', 'divide', 'pow'].includes(operation)) {
            rl.question("Enter first number: ", (x) => {
                rl.question("Enter second number: ", (y) => {
                    x = parseFloat(x);
                    y = parseFloat(y);
                    console.log(`Result: ${operations[operation](x, y)}`);
                    getOperation();
                });
            });
        } else if (['sin', 'cos', 'tan', 'log', 'exp'].includes(operation)) {
            rl.question("Enter number: ", (x) => {
                x = parseFloat(x);
                console.log(`Result: ${operations[operation](x)}`);
                getOperation();
            });
        } else {
            console.log("Error: Unsupported operation");
            getOperation();
        }
    });
};

getOperation();