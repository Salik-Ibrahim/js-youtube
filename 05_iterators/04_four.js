const myObject = {
   js: "javascript",
   cpp: "C++",
   rb: "ruby",
   swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} ${myObject[key]}`);// forin for object
}

const programming = ["js", "ruby", "python"]

for (const key in programming) {
   console.log(programming[key]);// forin for array
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
   console.log(key);// forin is not use for map
}