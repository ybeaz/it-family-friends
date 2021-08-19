const arr = [
  { class: 'second', fare: 'a', weight: 12 },
  { class: 'second', fare: 'b', weight: 10 },
  { class: 'first', fare: 'a', weight: 15 },
  { class: 'first', fare: 'a', weight: 17 },
  { class: 'second', fare: 'a', weight: 12 },
  { class: 'first', fare: 'c', weight: 30 },
  { class: 'second', fare: 'b', weight: 22 }, 
];
// написать функцию которая добавляет 4 свойсво к объекту arr.fiter('class')
// отфильтровать по 4 свойству
// вернуть резутат с исходными св-ми
const addPropToArr = (arr) => {
  const arr1 = arr.map(element => {
  return {...element, name: element.class + element.fare}
  });
  return arr1;
}

const getUniqArrBy = (filt, arr) => {
  // вспомнить сортировку по свойству через sort
  const arr1 = addPropToArr(arr);
  let arr3 = [];
  let arr2 = [];
  
  for (let value of arr1) {
    if (!arr3.includes(value.name)) {
      arr2.push(value)
      arr3.push(value.name)
    }
  }
  console.info({ arr2, arr3 });

 // return arr2;
  
    const arr4 = arr2.map(element => {
      delete element.name;
      return element;
        });
        return arr4;
  };
  

const uniq = getUniqArrBy(['class', 'fare'], arr)

console.info({ uniq })
/*
[
  { class: 'second', fare: 'a', weight: 12 },
  { class: 'second', fare: 'b', weight: 10 },
  { class: 'first', fare: 'a', weight: 15 },
  { class: 'first', fare: 'c', weight: 30 },
]
*/
