const Engineer = require("../library/engineer");

const generateTeam = team => {
    const generateManager = manager => {
    return `<div>HTML ${manager.getName()}</div>
            <div>HTML ${manager.getID()}</div>
            <div>HTML ${manager.getEmail()}</div>
            <div>HTML ${manager.getOfficeNumber()}</div>`};
    const generateEngineer = engineer => {
        return `<div>HTML ${engineer.getName()}</div>
                <div>HTML ${engineer.getID()}</div>
                <div>HTML ${engineer.getEmail()}</div>
                <div>HTML ${engineer.getGitHub()}</div>`};  
    const generateIntern = intern => {
    return `<div>HTML ${intern.getName()}</div>
    <div>HTML ${intern.getID()}</div>
    <div>HTML ${intern.getEmail()}</div>
    <div>HTML ${intern.getSchool()}</div>` };
                      
};




module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"
        <title>The Team</title>
      </head>
      
      <div>`
}