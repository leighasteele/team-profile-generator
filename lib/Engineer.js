const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = github;
  }
  showGitHub() {
    return this.gitHub;
  }
  showRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
