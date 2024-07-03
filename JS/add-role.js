const inquirer = require('inquirer')

function addRole() {
    return inquirer
    .prompt([
      {
        type: "input",
        message: "Name of the new role",
        name: "newRole",
      },
      {
        type: "input",
        message: "Salary",
        name: "salary",
      },
      {
        type: "input",
        message: "Which department is the new role in?",
        name: "part",
      },
    ])
}
module.exports = addRole