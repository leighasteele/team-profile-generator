const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('retrieves "Intern" from getRole()', () => {
    const obj = new Intern("Name2", 1236, "name@email.com", "Tech");
    const role = "Intern";
    expect(obj.getRole()).toEqual(role);
  });

  it("retrieves school from getSchool()", () => {
    const obj = new Employee("Name2", 1236, "name@email.com", "Tech");
    const testSchool = "Tech";
    expect(obj.getSchool()).toEqual(testSchool);
  });
});
