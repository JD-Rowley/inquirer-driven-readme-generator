// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license == 'Unlicense' || license == '') {
    return '';
  }
  return `
    <img src="https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=informational&style=for-the-badge" />
    `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  let url = 'https://choosealicense.com/';
  if (!license) {
    return '';
  } else {
    return url;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }
    
  return ``;
}

// Create function that inserts a Table of Contents
const renderContentsSection = contentsConfirm => {
  if (contentsConfirm) {
    return `
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Testing](#testing)
  * [Questions](#questions) 
  * [GitHub Repo](#github-repo)
    `;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  return `# ${templateData.title}
  ${renderLicenseSection(templateData.license[0])}
  [${renderLicenseBadge(templateData.license)}](${renderLicenseLink(templateData.license)})
  ${renderContentsSection(templateData.contentsConfirm)}
  ## Description
  ${templateData.description}
  ## Installation
  ${templateData.install}
  ## Usage
  ${templateData.usage}
  ## Contribution Guidelines
  ${templateData.contribution}
  ## Testing
  ${templateData.testing}
  ## Questions
  * GitHub: [${templateData.githubName}](http://github.com/${templateData.githubName})
  * E-mail: ${templateData.email}

  ### GitHub Repo: https://github.com/JD-Rowley/${templateData.repo}
  `;
}