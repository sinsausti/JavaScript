// Description:
// A secure password generator that creates random passwords based on user-specified criteria, such as length, and whether to include uppercase letters, digits, and symbols.

// Usage:
// node PasswordGenerator.js

const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generatePassword = (length, useUpper, useDigits, useSymbols) => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let charSet = lower;
    if (useUpper) charSet += upper;
    if (useDigits) charSet += digits;
    if (useSymbols) charSet += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet[crypto.randomInt(0, charSet.length)];
    }

    return password;
};

console.log("Welcome to the Password Generator!");

rl.question("Enter the desired length of the password: ", (length) => {
    rl.question("Include uppercase letters? (y/n): ", (useUpper) => {
        rl.question("Include digits? (y/n): ", (useDigits) => {
            rl.question("Include symbols? (y/n): ", (useSymbols) => {
                const password = generatePassword(
                    parseInt(length, 10),
                    useUpper.toLowerCase() === 'y',
                    useDigits.toLowerCase() === 'y',
                    useSymbols.toLowerCase() === 'y'
                );
                console.log(`Generated password: ${password}`);
                rl.close();
            });
        });
    });
});