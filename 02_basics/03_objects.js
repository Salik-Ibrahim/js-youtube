// singleton means unique objects
// Object.create(constructors)

// object literals

const mySym = Symbol("key1")

const jsUser = {
   name: "Salik",
   "full name": "Salik Ibrahim",
   [mySym]: "mykey1", // [] is needed to refer to symbols
   age: 20,
   location: "Delhi",
   email: "abc@gmail.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// correct syntax is using [] in objects

jsUser.email = "abc"
// Object.freeze(jsUser) // values cannot be changed after this
jsUser.email = "abcd"
console.log(jsUser);

jsUser.greeting = function () {
   console.log("Hello Js user");
}

jsUser.greetingTwo = function () {
   console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());