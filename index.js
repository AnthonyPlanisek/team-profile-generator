//fs used to write file for my HTML and inquirer for questions
const fs = require("fs")
const inquirer = require("inquirer")
//Pseudo Code

//Generate a basic HTML layout like on gitlab
//Ask the user for employee information
//1. Name 2. Job title 3. ID number 4. Email (with link to send email)
//depending on the job chosen ask a different final question
//Manager - Office number
//Engineer - Github (link to github)
//Intern - School name

//Start of code
promptName = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employee",
            message: "What is the employees name?",
            validate: (response) => {
                if (response.length < 1) {
                return console.log("Field cannot be left blank")
            }
             return true
            },
        },
    ])
    .then((answers) => {
        console.log(answers)
    })
}
promptName()