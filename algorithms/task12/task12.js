/*
Description: to find the greatest common divisor of two numbers
File name: getGreatestDivisorTwoNumbers.test.js
*/

const getGreatestDivisorTwoNumbers2 = (int0, int1) => {
  while (int0 !== int1) {
    if (int0 > int1) {
      int0 = int0 - int1
    } else {
      int1 = int1 - int0
    }
  }
  return int0
}

const getGreatestDivisorTwoNumbers = (int0, int1) => {
  let int = int0
  if (int => int1) {
    int = int1
  }
  for (let i = int; i <= int; i -= 1) {
    if (int0 % i === 0 && int1 % i === 0) {
      return i
    }
  }
}

const a = getGreatestDivisorTwoNumbers(12, 6) // 6
const b = getGreatestDivisorTwoNumbers(12, 256) // 4
console.info(a)
console.info(b)
