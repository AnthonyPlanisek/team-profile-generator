const { expect } = require("@jest/globals");
const Engineer = require("./engineer")
const Manager = require("./manager")
const Intern = require("./intern")
const Index = require("./index")
//const Index = new Index()


test("Engineer values", () => {
    expect("john").toBe("john")
});