// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm init'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can a user contribute to your repo?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['Apache', 'MIT', 'GNU', 'CC0-1.0', 'Unlicense']
        },
    ])
};

// const tableOfContents = contents => {
//     // if no table of contents, create array
//     if (!contents.sections) {
//         contents.sections = [];
//     }
//     return inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'contentsConfirm',
//             message: 'Will this README.md contain a "Table of Contents?"',
//             default: false
//         },
//         {
//             type: 'input',
//             name: 'contents',
//             message: 'Enter a "Table of Contents" section.',
//         },
//         {
//             type: 'confirm',
//             name: 'moreConfirm',
//             message: 'Are there more sections?',
//             default: true
//         }
//     ])
//     .then(contentsData => {
//         contents.sections.push(contentsData);
//         if (contentsData.moreConfirm) {
//             return enterContentsSection(contents);
//         } else {
//             return contentsData;
//         }
//     });
// };

questions()
    .then(answers => console.log(answers))

// TODO: Create a function to write README file
// function writeToFile() {
//     fs.writeFile('./generated-readme.md', generateMarkdown(title).toString(), err => {
//         if (err) throw err;

//         console.log('Readme Written!');
//     });
// };

// TODO: Create a function to initialize app
function init() {
    // writeToFile();
};

// Function call to initialize app
init();
