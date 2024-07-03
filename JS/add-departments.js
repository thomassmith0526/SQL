const inquirer = require('inquirer')

function addDepartment() {
    return inquirer
    .prompt([
      {
        type: "input",
        message: "Whats the name of the new department?",
        name: "newDep",
      },
    ])
}
module.exports = addDepartment