const inquirer = require("inquirer");

inquirer
    .prompt([
         {
                type: "list",
                message: "What would you like to do?",
                name: "actions",
                choices: [
                  "Add Employee",
                  new inquirer.Separator(),
                  "Update Employee Role",
                  new inquirer.Separator(),
                  "View all Roles",
                  new inquirer.Separator(),
                  "Add Role",
                  new inquirer.Separator(),
                  "View All Departments",
                  new inquirer.Separator(),
                  "Add Departments",
                  new inquirer.Separator(),
                  "Quit",
                ],
         }, 
        
    ])
    .then((answers) => {
        console.log(answers.actions);
    });