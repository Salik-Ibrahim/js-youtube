"use strict";//treat all js code as newer version
// alert (3+3) wil not work in noodejs
console.log(3 + 3)// code readability should be high
//ecma script has all the fundamentals of javascript (tc39,mdn)

let name = "salik"
let age = 20
let isLoggedIn = false

// number<2 to the power 53
// bigint for big number
// string " "
// boolean = true or false
// null = standalone value
// undefined = not defined
// symbol = unique

// object 

console.log(typeof "salik")
console.log(typeof 1)
console.log(typeof null) //null is a type of object
console.log(typeof undefined) // undefined is a data type

// Primitive data types
// 7 types : String, Number, Boolean, null, undefined, symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//Non primitive
//Array, Objects, Functions
// all non primitive data types are basiclly objects
const heros = ["shaktiman", "nagraj", "doga"]

// Types of Memories

// Stack(Primitive), Heap(Non-Primitive)
// In stack coped value is given to you and in heap reference 
// to the value is given

let firstName = "salik"

let secondName = firstName
secondName = "salik-ibrahim"

console.log(firstName);
console.log(secondName);

let userOne = {
   email: "abc.gamil.com",
   upi: "khvksd"
}

let userTwo = userOne

userTwo.email="salik@gmai.com"

console.log(userOne.email);
console.log(userTwo.email);