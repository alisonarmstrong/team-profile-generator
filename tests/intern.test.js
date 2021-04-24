const { expect } = require("@jest/globals");
const Intern = require("../library/Intern");

test ("Can set name via constructor arguments", () => {
    const name = "Alison";
    const e = new Intern(name)
    expect(e.name).toBe(Name);
});

test("Can set id via contructor argument", () => {
    const testValue= 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set school via constructor argument", () => {
    const testValue = "TCU";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});