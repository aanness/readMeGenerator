// function for license badge
function renderLicenseBadge(license){
  if(license !== "None"){
    return '[GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)';
  }
  return ''
}

// function for creating license link

// function for rendering license section 
function renderLicenseSection(license){
  if (license !== "None"){
    return (
      '## license '
    )
  }
  else {
    return ''
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  ${answers.title}
  
  ${renderLicenseBadge(answers.license)}

  ## GitHubInfo 
  ${answers.github}

  ## Email
  ${answers.email}

  ## Title
  ${answers.title}

  ## Description
  ${answers.description}

  ## License
  ${answers.license}

  ## Install
  ${answers.install}

  ## Tests
  ${answers.tests}

  ## Information
  ${answers.information}

  ## Contributors
  ${answers.contributors}

`;
}

module.exports = generateMarkdown;

// writeMarkdown
