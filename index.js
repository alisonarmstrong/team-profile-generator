const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const inquirer = require("inquirer");
const fs = require("fs");


function employeeInfo() {
    inquirer.prompt([
        {
        type: 'list',
        message: 'what type of employee?', 
        name: 'type',
        choices: ['Manager', 'Engineer', 'Intern'],
        },
    ]).then(val => {
        if (val.name === 'Manager') {
            managerInfo();
        }
        else if (val.name === 'Engineer') {
            engineerInfo();
        } 
        else if (val.name === 'Intern') {
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
    ])
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
    ])
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
    ])

}
