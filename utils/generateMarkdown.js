// function passing in license as arg
// validate lisence exists
// return ![Github license]


// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  ##GitHubInfo 
  ${answers.github}

  ## Email
  ${answers.email}

  ## Title
  ${answers.title}

  ##Description
  ${answers.description}

  ##License
  ${answers.license}

  ##Install
  ${answers.install}

  ##Tests
  ${answers.tests}

  ##Information
  ${answers.info}

  ##Contributors
  ${answers.contributors}

`;
}

module.exports = generateMarkdown;

// writeMarkdown
