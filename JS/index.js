const inquirer = require('inquirer')
const fs = require('fs')
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to do?',
            name: 'action',
        },

        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'departmentName',
        },

        {
            type: 'input',
            message: 'What would you like to do?',
            name: 'actionTwo',
        },

        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'roleName',
        },

        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'roleSalary',
        },

        {
            type: 'input',
            message: 'Which department does the role belong to?',
            name: 'roleBelong',
        },

        {
            type: 'input',
            message: 'What would you like to do?',
            name: 'actionThree',
        },

        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'employeeFirst',
        },

        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'employeeLast',
        },

        {
            type: 'input',
            message: 'What is the employees role?',
            name: 'employeeRole',
        },

        {
            type: 'input',
            message: 'What is the employees manager?',
            name: 'employeeManager',
        },

        {
            type: 'input',
            message: 'What would you like to do?',
            name: 'actionFour',
        },

        {
            type: 'input',
            message: 'Which employee/s role you want to update?',
            name: 'employeeRoleUpdated',
            choices: []
        },

    ])
    .then((response) =>
    console.log(response))