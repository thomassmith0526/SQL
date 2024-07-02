const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

const listQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "actions",
    choices: [
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Add Employees",
      "Update Employee Role",
      "Add Role",
      "Add Departments",
      "Quit",
    ],
  },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const pool = new Pool(
  {
    user: "postgres",
    password: "texas",
    host: "localhost",
    database: "thomassports_db",
  },
  console.log("Connected to the thomasspots database!")
);

pool.connect();

function init() {
  inquirer.prompt(listQuestions).then((answers) => {
    console.log(answers.actions);
    switch (answers.actions) {
      case "View All Employees":
        let tsVAE = "SELECT * FROM employees";
        pool.query(tsVAE, function (err, { rows }) {
          console.log(rows);
        });
        break;

      case "View All Roles":
        let tsVAR = "SELECT * FROM roles";
        pool.query(tsVAR, function (err, { rows }) {
          console.log(rows);
        });
        break;

      case "View All Departments":
        let tsVAD = "SELECT * FROM departments";
        pool.query(tsVAD, function (err, { rows }) {
          console.log(rows);
        });
        break;

      case "Add Employees":
        inquirer
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
                "What is the employees manager ID? (If there is no manager role enter 0)",
              name: "man_id",
            },
          ])
          .then((answers) => {
            let ts = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${answers.first}','${answers.last}', '${answers.role_id}', '${answers.man_id}');
            if (answers.man_id === "") {
              answers.man_id = null;
            }`;
            pool.query(ts, function (err, result) {
              if (err) {
                console.error("Error:", err);
              } else {
                console.log("new employee added");
              }
            });
          });

        break;

      case "Update Employee Role":
        inquirer
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
          .then((answers) => {
            pool.query(
              `UPDATE employees SET role = ${answers.emp_ID}  WHERE id = ${answers.new_ID}`,
              (err, results) => {
                if (err) {
                  console.error("Error with update", err);
                } else {
                  console.log("Employee updated successfully");
                }
              }
            );
          });

        break;

      case "Add Role":
        inquirer
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
          .then((answers) => {
            let tsAR = `INSERT INTO roles(title, salary, department) VALUES ('${answers.newRole}', '${answers.salary}', '${answers.part}')`;
            pool.query(tsAR, function (err, result) {
              if (err) {
                console.error("Error in role", err);
              } else {
                console.log("role added");
              }
            });
          });

        break;

      case "Add Departments":
        inquirer
          .prompt([
            {
              type: "input",
              message: "Whats the name of the new department?",
              name: "newDep",
            },
          ])
          .then((answers) => {
            let tsAD = `INSERT INTO departments (name) VALUES ('${answers.newDep}')`;
            pool.query(tsAD, function (err, result) {
              if (err) {
                console.error("Error in departments", err);
              } else {
                console.log("department added");
              }
            });
          });
        break;
      default:
        process.exit();
    }
  });
}

init();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
