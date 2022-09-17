const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  showOfficeNumber() {
    return this.office;
  }
  showRole() {
    return "Manager";
  }
}

module.exports = Manager;
