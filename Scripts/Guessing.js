// Description:
// A simple and interactive number guessing game where the user tries to guess a randomly generated number between 1 and 100. 
// The script provides feedback on whether the guess is too high or too low and counts the number of attempts until the correct number is guessed.

// Usage:
// node Guessing.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the guessing game!");
console.log("I'm thinking of a number between 1 and 100.");

const guessNumber = () => {
    rl.question("Guess the number: ", (guess) => {
        attempts += 1;
        guess = parseInt(guess, 10);

        if (guess < secretNumber) {
            console.log("Too low, try again.");
            guessNumber();
        } else if (guess > secretNumber) {
            console.log("Too high, try again.");
            guessNumber();
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            rl.close();
        }
    });
};

guessNumber();