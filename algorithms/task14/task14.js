/*
Description: to create a function that takes array of objects and sort them by the prop, for example, age
File name: getArrObjSortedByProp.test.js 
*/

const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }
const arrIn = [vasya, petya, masha]
const prop = 'name'

const getArrObjSortedByProp = (arrIn, prop) => {
  let arr = []
  if (prop === 'name') {
    arr = arrIn.sort((a, b) => (a.name > b.name ? 1 : -1))
  } else if (prop === 'age') {
    arr = arrIn.sort((a, b) => (a.age > b.age ? 1 : -1))
  }
  return arr
}
getArrObjSortedByProp(arrIn, prop) // [vasya, masha, petya] > [‘Вася’, ‘Маша’, ‘Петя’]
alert(arr[0].name) // Вася
alert(arr[1]['name']) // Маша
const prop = 'name'
alert(arr[2][prop]) // Петя
const prop = 'age'
alert(arr[2][prop]) // 30
