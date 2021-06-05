//fs used to write file for my HTML and inquirer for questions
const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require("./employee")
const employee = new Employee()
employee.employeeNameType()


/*
content = 
`

`



fs.appendFile("team.html", content, function (err) {
    if (err) throw err;
  console.log('Saved!');
})'*/