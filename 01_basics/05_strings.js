const name = "salik"
const repoCount = 50

// console.log(name + repoCount + " Value"); // this is old way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abcd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);