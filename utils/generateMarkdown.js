// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "BSD 3-Clause":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      case "Gnu":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  
      default:
        return "No license provided";
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  

  renderLicenseBadge(license);

  "This project is licensed under the [${data.license}](https://opensource.org/licenses/${data.license}) license.  This license was issued in ${year} by ${githubUser}."

}


//Create conditional response for contributions
function contributionResponse(contributions){
  if (contributions = true) {
    return "This project is open to contributions.  Please see my contact information in the questions section to collaborate."
    } else if 
    (contributions = false){
      return "This content is not open for contributions.  Please abide by the licensing guidelines in use."
    };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // switch case for license badge, link, and section
  let licenseBadge;
  let licenseLink;
  let licenseSection;
  switch (data.license) {
    case "Apache License 2.0":
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      licenseSection = `## License

This project is licensed under the [Apache License 2.0](${licenseLink}) - see the [LICENSE](./LICENSE) file for details.`;
      break;
    case "BSD 3-Clause":
      licenseBadge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      licenseSection = `## License

This project is licensed under the [BSD 3-Clause](${licenseLink}) - see the [LICENSE](./LICENSE) file for details.`;
      break;
    case "BSD 2-Clause":
      licenseBadge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      licenseSection = `## License

This project is licensed under the [BSD 2-Clause](${licenseLink}) - see the [LICENSE](./LICENSE) file for details.`;
      break;
    case "MIT":
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      licenseLink = "https://opensource.org/licenses/MIT";
      licenseSection = `## License

This project is licensed under the [MIT License](${licenseLink}) - see the [LICENSE](./LICENSE) file for details.`;
      break;
    default:
      licenseBadge = "";
      licenseLink = "";
      licenseSection = "";
      break;
  }

  return `
  # ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}


  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributions)
* [Tests](#Tests)
* [Questions](#Questions)

  
  ${licenseSection}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${contributionResponse(data.contributions)}

  ## Tests
  ${data.testInstructions}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
  You can find more of my work on GitHub at [${data.githubUser}](https://github.com/${data.githubUser}).

`;
}

module.exports = generateMarkdown;
