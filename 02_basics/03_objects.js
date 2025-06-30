// singleton using constructors

// objects

const mySym = Symbol ("key1");

const user = {
    name : "Aditya",
    age : 19,
    [mySym] : "bajaj@gmail.com",
    loggedIn : false
}

console.log(user.name);
console.log(user[mySym]);

user.greeting = function(){
    console.log("Hello");
}

user.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting); // function anonymous;
console.log(user.greeting()); 
console.log(user.greeting2()); 
