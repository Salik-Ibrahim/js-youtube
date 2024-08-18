const user = {
   username: "salik",
   price: 999,
   welcomeMessage: function () {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
   }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this will return empty object
// the global object in browsers is window object

// function chai() {
//    // let username = "salik" // this is will not work in functions
//    console.log(this.username);
// }

// chai()

const chai = () => { // this is arrow function
   let username = "salik"
   console.log(this.username);
}

// difference between arrow functions and functions should be known chatgpt
// chai()

// const addTwo = (num1, num2) => num1 + num2 // this is called implicit return
// const addTwo = (num1, num2) =>(num1 + num2)
// const addTwo = (num1, num2) => {
//    return num1 + num2
// }

const addTwo = (num1, num2) => ({ username: "salik" })

console.log(addTwo(3, 4));

// const myArray = [2, 3, 5, 4, 6]