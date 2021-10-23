"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union Types
const console_1 = require("console");
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.concat(y);
    }
    throw (0, console_1.error)("You are mixing types of Typescript");
}
let newManager = {
    employeeID: 123,
    age: 22,
    stockPlan: true
};
console.log(newManager);
