// const tinderUser = new Object() (singleton object)
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
   email: "abc@g.com",
   fullname: {
      userfullname: {
         firstname: "Salik",
         lastname: "Ibrahim"
      }
   }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)// {} is target source like obj3
// and other are source

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
   {
   }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// shows like array
// console.log(Object.values(tinderUser));// shows like array
// console.log(Object.entries(tinderUser));// shows like array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
   coursename: "js in hindi",
   price: "999",
   courseInstructor: "Salik"
}

const { courseInstructor: instructor } = course // instructor is just a name 
// given to courseInstructor this is called destructuring

// console.log(courseInstructor);
console.log(instructor);

// {
//    "name": "Salik",
//    "courseName": "js in hindi",
//    "price": "free"
// }
// JSON format of API

[
   {},
   {},
   {}
]

