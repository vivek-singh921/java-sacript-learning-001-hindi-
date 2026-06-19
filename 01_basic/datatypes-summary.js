//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber = 3456676745324465643432243565n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Krrish", "Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof id);


// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Singh123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

userTwo.upi = "user@axl"

console.log(userOne.upi);
console.log(userTwo.upi);







