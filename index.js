// Import required libraries
const mysql = require("mysql2");
const inquirer = require("inquirer");
// eslint-disable-next-line no-unused-vars
const table = require("console.table");

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
  db.createQuery(
    "SELECT * FROM employees", (err, results) => {
      console.table(results);
    }
  );
}

function viewAllDepartments() {
  db.createQuery(
    "SELECT * FROM all employees", (err, results) => {
      console.table(results);
    }
  );

}

function viewAllRoles() {
  db.createQuery(
    "SELECT * FROM roles", (err, results) => {
      console.table(results);
    }
  );
}

function addDepartments() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "What is the new department you want to add?"
      }
    ])
    .then((answer => {
        
    }));
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "What is the new role you want to add?"
      },

      {
        name: "roleSalary",
        type: "input",
        message: "What is the salary for this role?"
      },

      {
        name: "roleDepartment",
        type: "choice",
        message: "Which department does this role belong to?",
        choice: [""]
      }
    ])
    .then((answer => {
        
    }));
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the Employee's first name?"
      },

      {
        name: "lastName",
        type: "input",
        message: "What is the Employee's last name?"
      },

      {
        name: "employeeRole",
        type: "choice",
        message: "What is the employee's department?",
        choice: [""]
      }
    ])
    .then((answer => {

    }));
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "What is the new department you want to add?"
      }
    ])
    .then((answer => {
        
    }));
}

function userMenu() {
  inquirer
    .prompt([
      {
        name: "userMenu",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
      }
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

init();