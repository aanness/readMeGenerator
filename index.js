const inquirer = require("inquirer")
const fs = require("fs")
// path is built in but you have to require it
const path = require("path") 
const generate = require('./utils/generateMarkdown.js');
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?"
    },
    {
        type:"input",
        name:"description",
        message:"What is your project description?",
    },
    {
        type:"input",
        name:"contents",
        message:"What are your table of contents?"
    },
    {
        type:"input",
        name:"installation",
        message:"What are the installation instructions?",
    },
    {
        type:"input",
        name:"usage",
        message:"What is the project usage?",
    },
    {
        type:"input",
        name:"license",
        message:"Please provide the project licence or your badge link?",
    }, 
    {
        type:"input",
        name:"contributors",
        message:"Who are the contributing parties?",
    },
    {
        type:"input",
        name:"test",
        message:"Tests?",
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
        console.log("Generating README");
        writeToFile('README.md', generateMarkdown({...answers}));
    })
}

// function call to initialize program
init();
