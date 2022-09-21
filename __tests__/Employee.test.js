const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("retrieves name from getName()", () => {
    const obj = new Employee("Name", 1234, "name@email.com");
    const testName = "Name";
    expect(obj.getName()).toEqual(testName);
  });

  it("retrieves id from getId()", () => {
    const obj = new Employee("Name", 1234, "name@email.com");
    const testId = 1234;
    expect(obj.getId()).toEqual(testId);
  });

  it("retrieves email from getEmail()", () => {
    const obj = new Employee("Name", 1234, "name@email.com");
    const testEmail = "name@email.com";
    expect(obj.getEmail()).toEqual(testEmail);
  });

  it('retrieves "Employee" from getRole()', () => {
    const obj = new Employee("Name", 1234, "name@email.com");
    const role = "Employee";
    expect(obj.getRole()).toEqual(role);
  });
});
