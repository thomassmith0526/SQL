const inquirer = require("inquirer");

function updateEmployee() {
     return inquirer
.prompt([
  {
    type: "input",
    message: "What is the employees ID?",
    name: "emp_ID",
  },
  {
    type: "input",
    message: "Enter new role for the employee",
    name: "new_ID",
  },
])
}
module.exports = updateEmployee
