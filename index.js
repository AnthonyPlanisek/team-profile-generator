//fs used to write file for my HTML and inquirer for questions
const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require("./employee")
//Pseudo Code

//Generate a basic HTML layout like on gitlab
//Ask the user for employee information
//1. Name 2. Job title 3. ID number 4. Email (with link to send email)
//depending on the job chosen ask a different final question
//Manager - Office number
//Engineer - Github (link to github)
//Intern - School name

//Start of code (code needs to run x amount of times per employee)
let confirmPromise = new Promise(function() {

    inquirer
        .prompt([
            {
                type: "confirm",
                name: "add",
                default: true
            },
        ])
    
        .then((answers) => {
            if (answers.add === true) {
                console.log("answer", answers)
            } else {
                console.log("Your all done")
            }
            
        })
        .catch((error) => {
            if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
            }
          });
        })

let newPromise = new Promise(function() {
const createEmployee = new Employee("john")
createEmployee.employeeName()
})

newPromise.then(
    confirmPromise.then()
)