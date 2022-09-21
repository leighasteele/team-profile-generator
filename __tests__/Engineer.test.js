const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('retrieves "Engineer" from getRole()', () => {
    const obj = new Engineer("Name1", 1235, "name@email.com", "username");
    const role = "Engineer";
    expect(obj.getRole()).toEqual(role);
  });

  it("retrieves Github from getGitHub()", () => {
    const obj = new Employee("Name1", 1235, "name@email.com", "username");
    const testGitHub = "username";
    expect(obj.getGitHub()).toEqual(testGitHub);
  });
});
