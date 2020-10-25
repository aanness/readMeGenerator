const inquirer = require("inquirer")
const fs = require("fs")
// path is built in but you have to require it
const path = require("path") 
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type:"input",
        name:"github",
        message:"What is your github username?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
    },
    {
        type:"input",
        name:"title",
        message:"What is your project name?"
    },
    {
        type:"input",
        name:"description",
        message:"Write a short description of your project?",
    },
    {
        type:"list",
        name:"license",
        message:"What type of product license do you have?",
        choices: ["MIT", "APACHE 2.0", "GPL"]
    },
    {
        type:"input",
        name:"install",
        message:"What command should be run to install dependencies?",
    }, 
    {
        type:"input",
        name:"tests",
        message:"What command should be run to run tests?",
    },
    {
        type:"input",
        name:"information",
        message:"What does the user need to know about using this repo?",
    },
    {
        type:"input",
        name:"contributors",
        message:"What does the user need to know about contributing to this repo?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    // return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log("Generating README...");
        writeToFile('README.md', generateMarkdown({...answers}));
    })
}

// function call to initialize program
init();
