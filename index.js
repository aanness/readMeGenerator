const inquirer = require("inquirer")
const fs = require("fs")
// path is built in but you have to require it
const path = require("path") 
const generateMarkdown = require("generateMarkdown.js")


// array of questions for user
const questions = [
    {
        type:"input",
        name:"github",
        message:"What is your github username?"
    }
    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions) //promise function, .then function
    // call function writeToFile using data that we pass (ex the inquirer responses)
}

// function call to initialize program
init();
