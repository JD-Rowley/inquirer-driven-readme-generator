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
            type: 'confirm',
            name: 'confirmtInstallation',
            message: 'Does your project require installation instructions?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Are there any contribution guidelines?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['Apache', 'MIT', 'GNU', 'CC0-1.0', 'Unlicense']
        },
    ])
};

const tableOfContents = contents => {
    // if no table of contents, create array
    if (!contents.sections) {
        contents.sections = [];
    }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'contentsConfirm',
            message: 'Will this README.md contain a "Table of Contents?"',
            default: false
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Enter a "Table of Contents" section.',
        },
        {
            type: 'confirm',
            name: 'moreConfirm',
            message: 'Are there more sections?',
            default: true
        }
    ])
    .then(contentsData => {
        contents.sections.push(contentsData);
        if (contentsData.moreConfirm) {
            return tableOfContents(contents);
        } else {
            return contentsData;
        }
    });
};

questions()
    .then(tableOfContents)
    .then(contents => {
        console.log(contents);
    });

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
init(questions);
