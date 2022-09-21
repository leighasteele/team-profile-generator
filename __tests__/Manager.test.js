const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('retrieves "Manager" from getRole()', () => {
    const obj = new Manager("Name3", 1237, "name@email.com", "0123");
    const role = "Manager";
    expect(obj.getRole()).toEqual(role);
  });

  it("retrieves office number from getOfficeNumber()", () => {
    const obj = new Employee("Name3", 1237, "name@email.com", "0123");
    const testOfficeNumber = "0123";
    expect(obj.getOfficeNumber()).toEqual(testOfficeNumber);
  });
});
