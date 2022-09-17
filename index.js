const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const questions = require("./src/qs");
const pageTemplate = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");
const { manager, engineer, intern } = require('./src/qs');
const prompt = inquirer.createPromptModule();
const team = [];

prompt(questions.menu).then((answer) => {
    if (answer.value === 'manager'){
    prompt(questions.manager).then((data) => {
        const newManager = new Manager(
            data.name,
            data.id,
            data.email,
            data.office
        );
        team.push(newManager);
        addMember();
        });
    }
    if (answer.value === 'engineer'){
        prompt(questions.engineer).then((data) => {
            const newEngineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.gitHub
            );
            team.push(newEngineer);
            addMember();
            });
    }
    if (answer.value === 'intern'){
        prompt(questions.intern).then((data) => {
            const newIntern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );
            team.push(newIntern);
            addMember();
            });
    }
    if (answer.value === "no further additions") {
        fs.writeFileSync(`dist/team.html`, pageTemplate(team));
    }
});