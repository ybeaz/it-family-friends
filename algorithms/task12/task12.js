/*
Description: to find the greatest common divisor of two numbers
File name: getGreatestDivisorTwoNumbers.test.js
*/

const getGreatestDivisorTwoNumbers = (int0, int1) => {
  while (int0 !== int1) {
    if (int0 > int1) {
      int0 = int0 - int1;
    }
    else {
      int1 = int1 - int0;
    } 
  }
  return int0;
}

const a = getGreatestDivisorTwoNumbers(12, 6) // 6
const b = getGreatestDivisorTwoNumbers(12, 256) // 4
console.info(a);
console.info(b);