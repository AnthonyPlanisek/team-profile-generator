const inquirer = require("inquirer")

class Employee {
        constructor(name) {
        this.name = name
    }

    employeeName() {
        inquirer
            .prompt([
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
                {
                    type: "list",
                    name: "jobTitle",
                    message: "What is the employees job type",
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ])
            .then((answers) => {
                console.log("answer", answers)
            })
            .catch((error) => {
                if (error.isTtyError) {
                  // Prompt couldn't be rendered in the current environment
                } else {
                  // Something else went wrong
                }
              });
    }
    
}

module.exports = Employee