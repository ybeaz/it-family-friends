/*
Description: to get sub sums of the array from the beginning to the next item 
File name: getSubSumsArr.test.js
*/

const arrIn = [1, 2, 3, 4, 5]

const getSubSumsArr = arrIn => {
  let x = 0
  let arr = []
  arrIn.forEach(element => {
    x = x + arrIn[element]
    arr.push(x)
  })

  return arr
}

console.info(getSubSumsArr(arrIn)) // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
