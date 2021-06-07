// start with strings, numbers and booleans
let num = 100;
let num2 = num;
console.log(num, num2);

num = 300;
console.log(num, num2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const playersCopy = [...players];

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

const personCopy = { ...person };
