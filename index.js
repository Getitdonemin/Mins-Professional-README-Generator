// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']
// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "Title of your project",
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
    },

    // Installation
    {
        type: "input",
        name: "install",
        message: "Enter an explanation how to install the software, or commands for the program.",
    },

    // Usage
    {
        type: "input",
        name: "usage",
        message: "Describe how this program/project will be of use.",
    },

    // License 
    {
        type: "list",
        name: "license",
        message: "Select a license for this project.",
        choices: licenses
    },

    // contribution 
    {
        type: "input",
        name: "contribution",
        message: "How can users contribute to your project?",
    },

    // Tests
    {
        type: "input",
        name: "tests",
        message: "Enter any testing instructions you would like to provide for this project.",
    },

    // github username
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    // email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",

    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./readmefile/README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}
// Function call to initialize app
init();
