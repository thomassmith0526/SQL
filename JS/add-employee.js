const inquirer = require('inquirer');

function addEmployee() {
    return inquirer
.prompt([
  {
    type: "input",
    message: "What is the new employees first name",
    name: "first",
  },
  {
    type: "input",
    message: "What is the new employees last name?",
    name: "last",
  },
  
  {
    type: "input",
    message: "What is the new employees role ID?",
    name: "role_id",
  },
  {
    type: "input",
    message:
      "What is the employees manager ID?",
    name: "man_id",
  },
])

}

 module.exports = addEmployee   