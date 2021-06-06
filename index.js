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
            employeeType()
        } else {
            console.log("You are all done")
            fs.appendFile("team.html", 
                
            `
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
            </html>
            `
            
            , function (err) {
              if (err) throw err;
            console.log('Saved!');
          })
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
          console.log("test", newManager)
          fs.appendFile("team.html", 
                
                `
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${newManager.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${newManager.id}</li>
                  <li class="list-group-item">${newManager.email}</li>
                  <li class="list-group-item">${newManager.officeNumber}</li>
                  <li class="list-group-item">${newManager.role}</li>
                </ul>
              </div>
                `
                
                , function (err) {
                  if (err) throw err;
                console.log('Saved!');
              })
             confirmE()
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
              fs.appendFile("team.html", 
                
                `
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${newEngineer.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${newEngineer.id}</li>
                  <li class="list-group-item">${newEngineer.email}</li>
                  <li class="list-group-item">${newEngineer.github}</li>
                  <li class="list-group-item">${newEngineer.role}</li>
                </ul>
              </div>
                `
                
                , function (err) {
                  if (err) throw err;
                console.log('Saved!');
              })
             confirmE()
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

                fs.appendFile("team.html", 
                
                `
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${newIntern.name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${newIntern.id}</li>
                  <li class="list-group-item">${newIntern.email}</li>
                  <li class="list-group-item">${newIntern.school}</li>
                  <li class="list-group-item">${newIntern.role}</li>
                </ul>
              </div>
                `
                
                , function (err) {
                  if (err) throw err;
                console.log('Saved!');
              })
             confirmE()
              /*
              fs.appendFile("team.html", 
                
              `
              </div>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
              </body>
              </html>
              `
              
              , function (err) {
                if (err) throw err;
              console.log('Saved!');
            })
            */
            });
        };

employeeType()

