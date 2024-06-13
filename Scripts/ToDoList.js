// Description:
// A simple to-do list manager that allows users to add, view, complete, and delete tasks. 
// Tasks are stored in a text file for persistence between sessions. 

// Usage:
// node ToDoList.js

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TASK_FILE = 'tasks.txt';

const displayTasks = () => {
    if (!fs.existsSync(TASK_FILE) || fs.readFileSync(TASK_FILE, 'utf8').trim() === '') {
        console.log("No tasks to show.");
        return;
    }

    const tasks = fs.readFileSync(TASK_FILE, 'utf8').split('\n');
    tasks.forEach((task, index) => {
        const [description, completed] = task.split('|');
        console.log(`${index + 1}. ${description} - ${completed}`);
    });
};

const saveTasks = (tasks) => {
    fs.writeFileSync(TASK_FILE, tasks.join('\n'), 'utf8');
};

const loadTasks = () => {
    if (!fs.existsSync(TASK_FILE)) {
        return [];
    }

    const tasks = fs.readFileSync(TASK_FILE, 'utf8').trim().split('\n');
    return tasks.map(task => task.split('|'));
};

console.log("Welcome to the To-Do List Manager!");

const getChoice = () => {
    console.log("\nMenu:");
    console.log("1. View tasks");
    console.log("2. Add task");
    console.log("3. Complete task");
    console.log("4. Delete task");
    console.log("5. Quit");

    rl.question("Enter your choice: ", (choice) => {
        const tasks = loadTasks();

        switch (choice) {
            case '1':
                displayTasks();
                getChoice();
                break;
            case '2':
                rl.question("Enter task description: ", (description) => {
                    tasks.push([description, 'Not Done']);
                    saveTasks(tasks.map(task => task.join('|')));
                    getChoice();
                });
                break;
            case '3':
                displayTasks();
                rl.question("Enter task number to complete: ", (num) => {
                    const index = parseInt(num, 10) - 1;
                    if (index >= 0 && index < tasks.length) {
                        tasks[index][1] = 'Done';
                        saveTasks(tasks.map(task => task.join('|')));
                    } else {
                        console.log("Invalid task number.");
                    }
                    getChoice();
                });
                break;
            case '4':
                displayTasks();
                rl.question("Enter task number to delete: ", (num) => {
                    const index = parseInt(num, 10) - 1;
                    if (index >= 0 && index < tasks.length) {
                        tasks.splice(index, 1);
                        saveTasks(tasks.map(task => task.join('|')));
                    } else {
                        console.log("Invalid task number.");
                    }
                    getChoice();
                });
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("Invalid choice, please try again.");
                getChoice();
        }
    });
};

getChoice();