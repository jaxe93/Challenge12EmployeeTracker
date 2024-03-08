document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const position = document.getElementById('position').value;

    // TODO: Send the data to the server to add the employee to the database

    // Clear the form
    document.getElementById('addEmployeeForm').reset();
});

// TODO: Fetch and display employee data from the server

// Sample data (replace this with actual data from the server)
const sampleData = [
    { id: 1, firstName: 'John', lastName: 'Doe', position: 'Manager' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', position: 'Developer' }
];

// Display sample data in the employee list
const employeeList = document.getElementById('employeeList');
sampleData.forEach(employee => {
    const listItem = document.createElement('li');
    listItem.textContent = `${employee.firstName} ${employee.lastName} - ${employee.position}`;
    employeeList.appendChild(listItem);
});

const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
// const sql = require("./sql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "~Ma009090",
  database: "employeesDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  firstPrompt();
});

// function which prompts the user for what action they should take
function firstPrompt() {

  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        // "View Employees by Manager",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        // "Remove Role",
        // "Update Employee Manager",
        "End"]
    })}

    //going to need more work, will need to better look into SQL