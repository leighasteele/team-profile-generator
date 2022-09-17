const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  showOfficeNumber() {
    return this.officeNumber;
  }
  showRole() {
    return "Manager";
  }
}

module.exports = Manager;
