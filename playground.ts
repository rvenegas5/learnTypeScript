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

console.log(add(1, 2));
console.log(add("one", "two"));
//add(1, "two");