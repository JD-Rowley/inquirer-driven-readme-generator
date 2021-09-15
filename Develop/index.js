// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('./generated-readme.md', process.argv[2], err => {
        if (err) {
            return console.log(err);
        }

        console.log('Readme Written!');
    });
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
};

// Function call to initialize app
init();
