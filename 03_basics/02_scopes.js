var c = 300 // global scope
if (true) {
   let a = 10
   const b = 20
   var c = 30 // local scope
}
// scope in a function is called a function scope
// scope within a {} or block is called block scope
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
   const username = "salik"

   function two() {
      const website = "youtube"
      console.log(username);
   }
   // console.log(website);// website is not in the scope of one

   two()
}

// one()

if (true) {
   const username = "salik"
   if (username === "salik") {
      const website = " youtube"
      console.log(username + website); // this is called lexical scope
   }
   // console.log(website);
}

// console.log(username);

// question

console.log(addone(5));

function addone(num) {
   return num + 1
}

console.log(addTwo(5));// this is called hoisting

const addTwo = function (num) {
   return num + 2
}
