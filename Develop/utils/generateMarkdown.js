const { makeBadge, ValidationError } = require('badge-maker');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  return `# ${templateData.title}
  ${templateData.license}
  ## Description
  ${templateData.description}
  ## Table of Contents
  ${templateData.contents}
  ## Installation
  ${templateData.install}
  ## Usage
  ${templateData.usage}
  ## Contribution Guidelines
  ${templateData.contribution}
  ## Testing
  ${templateData.testing}
  ## Questions
    GitHub: ${templateData.githubName}
    E-mail: ${templateData.email}.
  `;}