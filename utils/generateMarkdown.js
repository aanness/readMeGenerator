// function passing in license as arg
// validate lisence exists
// return ![Github license]


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.github}
  ${data.projectName}
`;
}

module.exports = generateMarkdown;
