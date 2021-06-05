const inquirer = require("inquirer")

class Employee {
 
    confirmE = () => {
        inquirer
        .prompt([
            {
                type: "confirm",
                name: "add",
                default: true
            },
        ])
    
        .then((answers1) => {
            if (answers1.add === true) {
                console.log("answer", answers1)
                employeeNameType()
            } else {
                console.log("You are all done")
    
            }
            
        })
        .catch((error) => {
            if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
            }
          });
    }
    
       employeeNameType = () => {
    
       
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
                .then((answers2) => {
                    console.log("answers", answers2)
                    
                    if (answers2.jobTitle === "Manager") {
                        console.log("hello")
                        manager();
                    }if (answers2.jobTitle === "Engineer") {
                        engineer();
                    }if (answers2.jobTitle === "Intern") {
                        intern();
                    }
                    
                })
                .catch((error) => {
                    if (error.isTtyError) {
                  []    // Prompt couldn't be rendered in the current environment
                    } else {
                      // Something else went wrong
                    }
                  });
                }
        
    manager = () => {
        inquirer 
            .prompt([
                {
                    type: "input",
                    name: "officeNum",
                    message: "What is this managers office number?"
                }
            ])
            .then((answers3) =>{
                console.log("answers", answers3)
                confirmE()
            })
    }
    
    
    engineer = () => {
        inquirer 
            .prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is this engineers github?"
                }
            ])
            .then((answers4) =>{
                console.log("answers", answers4)
                confirmE()
            })
    }
    
    
    intern = () => {
        inquirer 
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is this interns school?"
                }
            ])
            .then((answers6) =>{
                console.log("answers", answers6)
                confirmE()
            })
    }
    
}

module.exports = Employee