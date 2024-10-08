const userEmail = "abc@gmail"
// const userEmail = ""

if (userEmail) {
   console.log("got the user email");
} else {
   console.log("Dont have the email");
}

// falsy values

// false, 0, null, -0, BigInt 0n, "", undefined , NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//    console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//    console.log("Empty object");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")