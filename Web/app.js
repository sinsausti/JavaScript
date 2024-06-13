// Number Guessing Game
let secretNumber;
let attempts;

function startGuessingGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessing-game-output').innerHTML = `
        <p>I'm thinking of a number between 1 and 100.</p>
        <input type="number" id="guess-input">
        <button onclick="guessNumber()">Guess</button>
        <p id="guess-feedback"></p>
    `;
}

function guessNumber() {
    const guess = parseInt(document.getElementById('guess-input').value, 10);
    attempts += 1;
    const feedback = document.getElementById('guess-feedback');
    
    if (guess < secretNumber) {
        feedback.textContent = 'Too low, try again.';
    } else if (guess > secretNumber) {
        feedback.textContent = 'Too high, try again.';
    } else {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}

// Scientific Calculator
function performCalculation() {
    const operation = document.getElementById('operation').value;
    const x = parseFloat(document.getElementById('input-x').value);
    let y;
    if (document.getElementById('input-y')) {
        y = parseFloat(document.getElementById('input-y').value);
    }
    let result;

    switch (operation) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        case 'pow':
            result = Math.pow(x, y);
            break;
        case 'sin':
            result = Math.sin(x * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(x * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(x * Math.PI / 180);
            break;
        case 'log':
            result = Math.log(x);
            break;
        case 'exp':
            result = Math.exp(x);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('calculator-output').textContent = `Result: ${result}`;
}

document.getElementById('operation').addEventListener('change', () => {
    const operation = document.getElementById('operation').value;
    const inputsDiv = document.getElementById('calculator-inputs');
    if (['add', 'subtract', 'multiply', 'divide', 'pow'].includes(operation)) {
        inputsDiv.innerHTML = `
            <label for="input-x">First Number</label>
            <input type="number" id="input-x">
            <label for="input-y">Second Number</label>
            <input type="number" id="input-y">
        `;
    } else {
        inputsDiv.innerHTML = `
            <label for="input-x">Number</label>
            <input type="number" id="input-x">
        `;
    }
});

// To-Do List
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    newTask.addEventListener('click', () => {
        newTask.classList.toggle('completed');
    });
    taskList.appendChild(newTask);
    taskInput.value = '';
}

// Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value, 10);
    const useUpper = document.getElementById('include-uppercase').checked;
    const useDigits = document.getElementById('include-digits').checked;
    const useSymbols = document.getElementById('include-symbols').checked;

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
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    document.getElementById('password-output').textContent = `Generated password: ${password}`;
}