const Manager = require("../library/Manager");

test ("Can set name via constructor arguments", () => {
    const name = "Alison";
    const e = new Manager(name)
    expect(e.name).toBe(Name);
});

test("Can set id via contructor argument", () => {
    const testValue= 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
})

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});