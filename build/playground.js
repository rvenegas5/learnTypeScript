"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(add(1, 2));
console.log(add("one", "two"));
//add(1, "two");
