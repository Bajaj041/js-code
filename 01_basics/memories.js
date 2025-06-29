// Stack (Primitive) and Heap (Non-Primitive)

// stacks gives copy of a memory and heap gives the reference of the memory;

let myName = "Adiya";

let anotherName = myName;
anotherName = "Bajaj"

console.log(myName);
console.log(anotherName);

let user = {
    email : "bajaj@gmail.com"
}

let admin = user;
admin.email = "aditya@gmail.com"

console.log(user.email);
console.log(admin.email);