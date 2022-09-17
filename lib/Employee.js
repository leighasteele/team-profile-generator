class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  showName() {
    return this.name;
  }
  showId() {
    return this.id;
  }
  showEmail() {
    return this.email;
  }
  showRole() {
    return "Employee";
  }
}

module.exports = Employee;
