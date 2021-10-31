const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please enter a description of your project.',
            name: 'description',
        },
        {
          type: 'input',
          message: 'What was your motivation?',
          name: 'motive',
        },
        {
          type: 'input',
          message: 'Why did you build this project?',
          name: 'why',
        },
        {
          type: 'input',
          message: 'What problem does it solve?',
          name: 'problem',
        },
        {
          type: 'input',
          message: 'What did you learn?',
          name: 'learn',
        },
        {
          type: 'input',
          message: 'If applicable, please enter installation instructions.',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Provide instructions and examples of your project in use for the Usage section.',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'How to contribute?',
          name: 'contributing',
        },
        {
          type: 'input',
          message: 'If applicable, please provide testing related information',
          name: 'test',
        },
        {
          type: 'list',
          message: "Choose a license for your project.",
          choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
          name: 'license'
        },
        {
          type: 'input',
          message: 'Please enter your Github username',
          name: 'gitUser'
        },
        {
          type: 'input',
          message: 'Please enter your email address.',
          name: 'email'
        },
    ])

    .then((response) => 
    fs.writeFile(`${response.name}.md`, generateREADME(response), 'utf-8', function(){
        console.log('successfully wrote file')
    })
  );

const generateREADME = ({projectName,description,motive,why,problem,learn,license,installation,usage,contributing,test,gitUser,email}) =>
`# ${projectName}
## Description
${description}
-\
${motive}
-\
${why}
-\
${problem}
-\
${learn}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## How to Contribute
${contributing}
## Tests
${test}
## Questions
${gitUser}
${email}
`