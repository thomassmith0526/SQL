const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const { Pool } = require("pg");
const table = require("console.table");
const addEmployee = require("./add-employee");
const updateEmployee = require("./update-employee");
const addRole = require("./add-role");
const addDepartment = require("./add-departments");
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
          console.table(rows);
        });
        break;

      case "View All Roles":
        let tsVAR = "SELECT * FROM roles";
        pool.query(tsVAR, function (err, { rows }) {
          console.table(rows);
        });
        break;

      case "View All Departments":
        let tsVAD = "SELECT * FROM departments";
        pool.query(tsVAD, function (err, { rows }) {
          console.table(rows);
        });
        break;

      case "Add Employees":
        addEmployee().then((answers) => {
          let manager_id = answers.man_id === "" ? null : answers.man_id;
          let sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${answers.first}','${answers.last}', '${answers.role_id}', ${manager_id})`;

          pool.query(sql, function (err, result) {
            if (err) {
              console.error("Error:", err);
            } else {
              console.log("new employee added");
            }
          });
        });

        break;

      case "Update Employee Role":
     updateEmployee()
          .then((answers) => {
            pool.query(
              `UPDATE employees SET id = ${answers.emp_ID}  WHERE role_id = ${answers.new_ID}`,
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
      addRole()
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
        addDepartment()   
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
