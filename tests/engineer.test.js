const { expect, test } = require("@jest/globals");
const Engineer = require("../library/Engineer");



test ("Can set name via constructor arguments", () => {
    const name = "Alison";
    const e = new Engineer(name)
    expect(e.name).toBe(Name);
});

test("Can set id via contructor argument", () => {
    const testValue= 100;
    const e = new Engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set GitHub via constructor", () => {
    const testValue = "githubuser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});