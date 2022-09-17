const questions = {
  manager: [
    {
      name: "name",
      type: "input",
      message: "enter manager name",
    },
    {
      name: "id",
      type: "number",
      message: "enter manager id",
    },
    {
      name: "email",
      type: "input",
      message: "enter manager email",
    },
    {
      name: "office",
      type: "number",
      message: "enter manager office number",
    },
  ],

  menu: [
    {
      name: "value",
      type: "rawlist",
      message: "add another?",
      choices: ["Manager", "Engineer", "Intern", "no further additions"],
    },
  ],

  engineer: [
    {
      name: "name",
      type: "input",
      message: "enter engineer name",
    },
    {
      name: "id",
      type: "number",
      message: "enter engineer id",
    },
    {
      name: "email",
      type: "input",
      message: "enter engineer email",
    },
    {
      name: "gitHub",
      type: "input",
      message: "enter engineer github username",
    },
  ],

  menu: [
    {
      name: "value",
      type: "rawlist",
      message: "add another?",
      choices: ["Manager", "Engineer", "Intern", "no further additions"],
    },
  ],

  intern: [
    {
      name: "name",
      type: "input",
      message: "enter intern name",
    },
    {
      name: "id",
      type: "number",
      message: "enter intern id",
    },
    {
      name: "email",
      type: "input",
      message: "enter intern email",
    },
    {
      name: "school",
      type: "input",
      message: "enter intern school",
    },
  ],

  menu: [
    {
      name: "value",
      type: "rawlist",
      message: "add another?",
      choices: ["Manager", "Engineer", "Intern", "no further additions"],
    },
  ],
};

module.exports = questions;
