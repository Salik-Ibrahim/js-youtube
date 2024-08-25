const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {// this is reduce
//    console.log(`${acc} ${currVal}`);
//    return acc + currVal
// }, 0)

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
   {
      itemName: "js course",
      price: 2999
   },
   {
      itemName: "py course",
      price: 4999
   },
   {
      itemName: "c++ course",
      price: 5999
   }
]

const myTotal = shoppingCart.reduce((acc, item) => item.price + acc, 0)
console.log(myTotal);