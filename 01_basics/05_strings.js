const name = "Aditya";
const value = 100;

console.log(name + value + " hello");

console.log(`My name is ${name}`)

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(0));
console.log(name.indexOf('a'));

const newName = name.substring(0,3); // last not included
console.log(newName);

const sliceName = name.substring(-9,3); // can give negative values;
console.log(sliceName);

const space = "    aditya     ";
console.log(space.trim()); // removes spaces from start and end;

const url = "bajaj.com";

console.log(url.replace("bajaj", "adiya"));
console.log(url); // gives bajaj.com only as the copy of url is sent to replace

console.log(url.includes(".com"));