const inquirer = require("inquirer");
const fs = require("fs");
const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const listQuestions =  {
    type: "list",
    message: "What would you like to do?",
    name: "actions",
    choices: [
      "Add Employee",
      "Update Employee Role",
      "View all Roles",
      "Add Role",
      "View All Departments",
      "Add Departments",
      "Quit",
    ],
  }
// Connect to database
const pool = new Pool(
  {
    
    user: 'postgres',
    password: 'texas',
    host: 'localhost',
    database: 'thomassports_db'
},
console.log('Connected to the thomasspots_db database!')
)

pool.connect();


function init() {
    inquirer
  .prompt(listQuestions)
    .then((answers) => {
    console.log(answers.actions)
 })

 switch (listQuestions) {
    case: 'Add Employees' 
    //
    break;


 }


}

init()


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  