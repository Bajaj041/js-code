// Primitive (Call by Value)

// 7 types: String, Number, Symbol, Boolean, bigInt, Undefined, Null

const id = Symbol('123');
const accountId = Symbol('123');

console.log(id == accountId); //gives false as both become unique


// Non Primitive (Call by refernece)

// Array, Objects, Functions

//array
const heros = ["hulk", "Spider-man", "iron-man"];

//objects
let myObj = {
    name: "Aditya",
    age: 19
}

const myFunction = function(){
    console.log("Hello World");
}