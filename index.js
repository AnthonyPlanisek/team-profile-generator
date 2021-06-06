//fs used to write file for my HTML and inquirer for questions
const fs = require("fs")
const inquirer = require("inquirer")
const Engineer = require("./engineer")
const Manager = require("./manager")
const Intern = require("./intern")
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

   employeeType = () => {

   
        inquirer
            .prompt([

                {
                    type: "list",
                    name: "jobTitle",
                    message: "What is the employees job type",
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ])
            .then((answers2) => {
                console.log("answers2", answers2)
                
                if (answers2.jobTitle === "Manager") {
                    manager()
                }if (answers2.jobTitle === "Engineer") {
                    engineer()
                }if (answers2.jobTitle === "Intern") {
                    intern()
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
            message: "Who is the team's Manager?",
            name: "name",
          },
          {
            type: "input",
            message: "Manager's employee ID:",
            name: "id",
          },
          {
            type: "input",
            message: "Manager's email address:",
            name: "email",
          },
          {
            type: "input",
            message: "Manager's office number:",
            name: "officeNumber",
          },
        ])
        .then((managerAdd) => {
          managerAdd.role = "Manager";
          const { name, id, email, officeNumber, role } = managerAdd;
          const newManager = new Manager(name, id, email, officeNumber, role);
          employees.push(newManager);
          employeeType();
        });
    };


engineer = () => {
    inquirer 
        .prompt([
            {
                type: "input",
                message: "What is the Engineer's name?",
                name: "name",
              },
              {
                type: "input",
                message: "Engineer's employee ID:",
                name: "id",
              },
              {
                type: "input",
                message: "Engineer's email address:",
                name: "email",
              },
              {
                type: "input",
                message: "Engineer's github user name:",
                name: "github",
              },
            ])
            .then((engineerAdd) => {
              engineerAdd.role = "Engineer";
              const { name, id, email, github, role } = engineerAdd;
              console.log(name, "engName")
              const newEngineer = new Engineer(name, id, email, github, role)
              console.log("test", newEngineer)
            })
        }



intern = () => {
    inquirer 
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name",
              },
              {
                type: "input",
                message: "Intern's employee ID:",
                name: "id",
              },
              {
                type: "input",
                message: "Intern's email address:",
                name: "email",
              },
              {
                type: "input",
                message: "Intern's school:",
                name: "school",
              },
            ])
            .then((internAdd) => {
              internAdd.role = "Intern";
              const { name, id, email, school, role } = internAdd;
              const newIntern = new Intern(name, id, email, school, role);
                console.log("test", newIntern)
            });
        };

employeeType()







/*
content = 
`

`
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


fs.appendFile("team.html", content, function (err) {
    if (err) throw err;
  console.log('Saved!');
})'*/