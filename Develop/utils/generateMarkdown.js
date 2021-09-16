const profileDataArgs = process.argv.slice(2);
const [title] = profileDataArgs;
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
function generateMarkdown(title) {
  return `
  # ${title}
  License
  ## Description
  Description
  ## Table of Contents
  Contents
  ## Installation
  Install
  ## Usage
  Use
  ## Contribution Guidelines
  Contribute
  ## Testing
  Test
  ## Questions
  For questions, consult GitHub or send messages to E-mail.
  `;
}

console.log(generateMarkdown(title))

// return `# ${data.title}
// ${data.license}
// ## Description
// ${data.description}
// ## Table of Contents
// ${data.contents}
// ## Installation
// ${data.installation}
// ## Usage
// ${data.usage}
// ## Contribution Guidelines
// ${data.contribution}
// ## Testing
// ${data.testing}
// ## Questions
// For questions, consult ${data.githubName} or send messages to ${email}.
// `;

module.exports = generateMarkdown;
