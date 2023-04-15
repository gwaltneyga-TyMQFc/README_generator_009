// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const util = require("util");


// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is your project description?",
    "What are your installation requirements?",
    "How do use this application?",
    "What license would you like to use? Please select one.",
    "Are you open to contributions?",
    "What command will run your test?",
    "Enter your GitHub username.",
    "What is your email address?",
];

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

//Need to have user prompt matched with the questions for return
//Prompt response must be aligned with questions.
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "input",
            name: "description",
            message: questions[1],
        },
        {
            type: "input",
            name: "installation",
            message: questions[2],
        },
        {
            type: "input",
            name: "usage",
            message: questions[3],
        },
        {
            type: "list",
            name: "license",
            message: questions[4],
            choices: ["Apache License 2.0", "BSD 3-Clause", "BSD 2-Clause", "MIT"]
        },
        {
            type: "confirm",
            name: "contribution",
            message: questions[5],
        },
        {
            type: "input",
            name: "testInstructions",
            message: questions[6],
        },
        {
            type: "input",
            name: "githubUser",
            message: questions[7],
        },
        {
            type: "input",
            name: "email",
            message: questions[8],
        },

    ])
}


// TODO: Create a function to initialize app
async function init() {
    console.log("Hello!");
    try {
        const answers = await promptUser();
        const readme = generateMarkDown(answers);
        await writeFileAsync("README.md", readme);
        console.log("Successfully Wrote README.md!");

    } catch (err) {
        console.log(err);
        
    }


}

// Function call to initialize app
init();
