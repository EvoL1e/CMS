// Import required libraries
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to Database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "cms_db"
  },
  console.log("Connected to the cms_db database.")
);

// Helper functions
function viewAllEmployees() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

function viewAllRoles() {

}

function addRole() {

}

function viewAllDepartments() {

}

function addDepartments() {

}

function userMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "userMenu",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
      },
    ])
    .then((answer => {
      switch(answer.userMenu) {
      case "View All Employees":
        viewAllEmployees();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "Add Role":
        addRole();
        break;

      case "View All Departments":
        viewAllDepartments();
        break;

      case "Add Department":
        addDepartments();
        break;

      case "Quit":
        //something to exit loop
        break;

      default:
        //do nothing
      }
    }));
}



function init() {
  userMenu();
}