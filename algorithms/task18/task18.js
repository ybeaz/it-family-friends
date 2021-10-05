//Description: to reverse a string in JavaScript
//File name: getReverseSt.test.js

const str = 'string'

const getReverseStr = str => {
  let stringArr = str.split('').reverse().join('')
  return stringArr
}

const strNext = getReverseStr(str) // 'gnirts'
console.info(strNext)
