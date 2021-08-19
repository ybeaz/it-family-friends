/*
Description: to merge two arrays the way the equal numbers placing next to each other
File name: mergeTwoSortedArray.test.js
*/
const reCount = (a, b) => {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
}

const mergeTwoSortedArray = (arrA, arrB) => {
  const arrC = arrA.concat(arrB)
  console.info('[str 9]', arrC)
  arrC.sort(reCount)
  console.info('[str 11]', arrC)
  return arrC
}

const arrA = [2, 3, 4, 11, 17]
const arrB = [1, 4, 4, 15, 17, 19]
const output = mergeTwoSortedArray(arrA, arrB) // [1,2,3,4,4,4,11,15,17,17,19]
