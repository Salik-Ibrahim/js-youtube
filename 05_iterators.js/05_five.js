const coding = ["js", "ruby", "java", "python"]

// coding.forEach(function (val) {// foreach
//    console.log(val);
// })

// coding.forEach((val) => {
//    console.log(val);
// })

// function printMe(item){
//    console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {// foreach knows theses three arguments
//    console.log(item, index, arr);
// })

const myCoding = [
   {
      languageName: "javascript",
      languageFileName: "java"
   },
   {
      languageName: "python",
      languageFileName: "py"
   },
   {
      languageName: "C++",
      languageFileName: "cpp"
   }
]

myCoding.forEach((item) => {
   console.log(item.languageName + ', ' + item.languageFileName);
})