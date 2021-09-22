// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username? (Required)',
            default: 'jd-rowley',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address? (Required)',
            default: 'jdrowley1989@gmail.com',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your e-mail address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: 'README Generator',
        },
        {
            type: 'confirm',
            name: 'contentsConfirm',
            message: 'Does this README.md require "Table of Contents?"',
            default: false,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Your README needs a description!');
                    return false;
                }
            }
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
            message: 'What does the user need to know about using the repo? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Your README needs usage guidelines!');
                    return false;
                }
            }
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
            choices: ['Apache License 2.0', 'ISC', 'MIT', 'GNU GPLv3', 'CC0-1.0', 'CC-BY-SA-4.0', 'Unlicense'],
        }
    ]);
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(answers => {
            const mdFile = generateMarkdown(answers);

            fs.writeFile('./dist/generated-readme.md', mdFile, err => {
                if (err) throw err;

                console.log('Generating ReadMe...');
                console.log(answers)
            })
        })
};

// Function call to initialize app
init();
