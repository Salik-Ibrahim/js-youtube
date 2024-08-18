function sayMyName() {
   console.log("S");
   console.log("A");
   console.log("L");
   console.log("I");
   console.log("K");
}

// sayMyName() // sayMyName is just reference adding ()executes it

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
   let result = number1 + number2
   return result
   // return number1 + number2
}

addTwoNumbers(3, 4)
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") { // here default value is sam
   if (!username) {
      console.log("Please enter a username");
      return
   }
   return `${username} just logged in`
}

// console.log(loginUserMessage()); // if no argument is passed it will show
// undefined just logged in 

function calculateCartPrice(...num1) {// ... is called rest operator or spread operator
   return num1
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
   username: "salik",
   price: 199
}

function handleObject(anyobject) {
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// console.log(handleObject(user));
console.log(handleObject({
   username: "salik",
   price: 199
}))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));