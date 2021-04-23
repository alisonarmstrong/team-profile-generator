const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./source/template");
const team = []
const html = (response) =>
`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"
      </head>
      
      <body>
      <div class="container">
      <div class="row">
          <div class="col-12 jumbotron mb-3">
              <h1 class="text-center">Employees</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="col-12 flex justify-content-center">
              <p>Name:${response.name}</p>
              <p>ID:${response.id}</p>
              <p>Email:${response.email}</p>
              <p>School:${response.school}</p>
              <p>GitHub${response.github}</p>
              <p>Office Number${response.officenumber}</p>
          </div>
      </div>
  </div>

      </body>`;

function employeeInfo() {
    inquirer.prompt([
        {
        type: 'list',
        message: 'what type of employee?', 
        name: 'type',
        choices: ['Manager', 'Engineer', 'Intern'],
        },
    ]).then(val => {
        if (val.type === 'Manager') {
            managerInfo();
        }
        else if (val.type === 'Engineer') {
            engineerInfo();
        } 
        else if (val.type === 'Intern') {
            internInfo();
        }
    })
};

function managerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Managers Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Managers ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Managers Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Managers Office Number:',
            name: 'office number',
        },
    ]).then((response) => {
        var createHTML = html(response)
        fs.writeFile('team.html', createHTML, (err) =>
        err ? console.error(err) : console.log('created team profile')
        )
    }).catch(err => console.log(err))
}

function engineerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Engineers Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Engineers ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Engineers Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Engineers GitHub:',
            name: 'GitHub',
        },
    ]).then((response) => {
        var createHTML = html(response)
        fs.writeFile('team.html', createHTML, (err) =>
        err ? console.error(err) : console.log('created team profile')
        )
    }).catch(err => console.log(err))
}

function internInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Intern Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Intern ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Intern Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Intern School:',
            name: 'school',
        },
    ]).then((response) => {
        var createHTML = html(response)
        fs.writeFile('team.html', createHTML, (err) =>
        err ? console.error(err) : console.log('created team profile')
        )
    }).catch(err => console.log(err))

};


employeeInfo();