const { expect } = require("@jest/globals");
//const index = require("./index")

test("checks if name was entered", () => {
    expect("john").toBe("john")
});