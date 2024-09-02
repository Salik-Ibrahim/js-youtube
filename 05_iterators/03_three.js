// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {// for of loop
//    console.log(num);
// }

const greetings = "Hellow world!"
// for (const greet of greetings) {
//    console.log(`Each character is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
   // console.log(key);
   // console.log(value);
}

const myObject = {
   'game1': 'NFS',
   'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
   console.log(key, value);// objects cant be iterated by forof loop
}