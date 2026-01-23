// primitive data types 

//  7 types: String, Number, Boolean, null, undefined,Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);


// Reference( Non primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "nagraj","doga"];
 let myobj= { 
    name: "Ravi",
    age: 20

 }
 const myFunction = function() {
   console.log("Hello , World")
 }

console.log(typeof myobj);
console.log(typeof myFunction);
console.log(typeof heros);




// **********************Memory type******************************

// Stack (Primitive) . Heap (Non-primitive)  Memory


// stack --> Copy of Memory

let myName = "RAVIKANT"
let anotherName = myName
anotherName = "Saurabh"

console.log(myName);
console.log(anotherName);

// Heap ---> reference (not a copy)

let userOne = {
   email: "ravikant@gmail.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ravikantpurbey@gmail.com"

console.log(userOne.email);








