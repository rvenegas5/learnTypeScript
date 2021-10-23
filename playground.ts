// Union Types
import { error } from "console";

function add(x: number | string, y: number | string) {
  if ( typeof x === "number" && typeof y === "number" ) {
    return x + y;
  }

  if ( typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }

  throw error("You are mixing types of Typescript");
}

// Intersection Types
interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
  employeeID: 123,
  age: 22,
  stockPlan: true
};

// Defining Literal Types
type testResult = "pass" | "fail" | "incomplete"; // Creating a new Type
let myResult: testResult;
myResult = "pass"; // Valid value
myResult = "fail"; // Valid Value
myResult = "incomplete"; // Valid Value
// myResult = "ok"; invalid Value

type dice = 1 | 2 | 3 | 4 | 5 | 6; // Creating a new Type with integers values
let diceRoll: dice;
diceRoll = 2; // Valid Value
diceRoll = 3; // Valid Value
// diceRoll = 7; Valid Value

/* -------------------------- Collection types -------------------------*/

// Arrays
// First way
let list: number[] = [1, 2, 3, 4, 5];
// Second Way
let listB: Array<number> = [1, 3, 5, 7];

// Tuples
let personA: [string, number, number] = ["William", 22, 099999999];
let personB: [string, number] = ["Bodero", 21]; 







