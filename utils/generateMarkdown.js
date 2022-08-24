// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";
  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
  // title
  let markdown = "# " + data.title + "\n";

  // license badge
  markdown += renderLicenseBadge(data.license) + "\n";

  // table of contents
  markdown += "## Table of Contents\n";
  for (let i = 0; i < sections.length; i++) {
    if (!(sections[i] === "License" && data.license === "None")) {
      markdown += i + 1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  // description
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";

  // installation
  markdown += "## " + sections[1] + "\n";
  markdown += data.install + "\n";

  // usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";

  // contributing
  markdown += "## " + sections[3] + "\n";
  markdown += data.contribution + "\n";

  // testing
  markdown += "## " + sections[4] + "\n";
  markdown += data.tests + "\n";

  // license
  markdown += renderLicenseSection(data.license) + "\n";

  // questions
  markdown += "## " + sections[6] + "\n";
  markdown += "You can find me [HERE](https://github.com/" + data.userName + ") on Github\n";
  markdown += "You can email me at " + data.userEmail + " if you have any additional questions.\n"

  return markdown;
}
module.exports = generateMarkdown;
