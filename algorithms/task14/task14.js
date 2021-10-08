/*
Description: to create a function that takes array of objects and sort them by the prop, for example, age
File name: getArrObjSortedByProp.test.js 
*/

const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }
const arrIn = [vasya, petya, masha]
const prop = 'name'

const getArrObjSortedByProp = (arrIn, prop) =>
  arrIn.sort((a, b) => (a[prop] > b[prop] ? 1 : -1))
const res = getArrObjSortedByProp(arrIn, prop)
console.info('15', res) // [vasya, masha, petya] > [‘Вася’, ‘Маша’, ‘Петя’]
