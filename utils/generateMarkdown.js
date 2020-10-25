// function passing in license as arg
// validate lisence exists
// return ![Github license]


// function to generate markdown for README
function generateMarkdown(answers, gitHubInfo) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${answers.contents}

  ##Installation
  ${answers.installation}

  ##Usage
  ${answers.usage}

  ##License
  ${answers.license}

  ##Contributors
  ${answers.contributors}

  ##Test
  ${answers.test}

`;
}

module.exports = generateMarkdown;

// writeMarkdown
