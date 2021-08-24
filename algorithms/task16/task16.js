/*
Description: to create a function that takes array of objects and calculates average of the prop, for example, age
File name: getArrObjAverageProp.test.js
*/

const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }

const arrIn = [vasya, petya, masha]
const prop = 'age'

const getArrObjAverageProp = (arrIn, prop) =>
  arrIn.reduce((sum, current) => {
    return sum + current[prop]
  }, 0) / arrIn.length

const x = getArrObjAverageProp(arrIn, prop)
console.info('25', x) // (25 + 30 + 29) / 3 = 28
