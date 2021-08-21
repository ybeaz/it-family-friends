/*
Description: to create a function that takes an array of integers and shuffle it randomly
File name: getArrShuffled.test.js
*/

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const getArrShuffled = arr => {
  arr.sort(() => Math.random() - 0.5)
  return arr
}

//let x = getArrShuffled(arr) // [2,1,3] or whatever
console.info(getArrShuffled(arr))
