const { makeBadge, ValidationError } = require('badge-maker');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license == 'Unlicense' || license == '') {
    return '';
  }
  const format = {
    label: 'license',
    message: license.join(', '),
    color: 'informational',
    style: 'for-the-badge',
  }

  const svg = makeBadge(format)

  if (svg) {
    return svg;
  }
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
// const renderContentsSection = () => {
//   if (contentsConfirm === true) {
//     return `
//       ## Table of Contents
//       * [Description](#description)
//       * [Installation](#installation)
//       * [Usage](#usage)
//       * [Contributional Guidelines](#contribution)
//       * [Testing](#testing)
//       * [Questions](#questions) 
//     `;
//   } else {
//     return '';
//   }
// };

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  return `# ${templateData.title}
  ${renderLicenseSection(templateData.license[0])}
  [${renderLicenseBadge(templateData.license)}](${renderLicenseLink(templateData.license)})
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributional Guidelines](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)  
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
  `;
}