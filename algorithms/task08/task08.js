const arr = [1, 2, 1, 'min', 'max', 'max', 'min']


function removeDuplicateMembersArray(arr) {
  let arr1 = [];

  for (let value of arr)
    if (!arr1.includes(value)) {
      arr1.push(value)
    }
  return arr1;
}
let a = removeDuplicateMembersArray(arr); // [1, 2, 'min', 'max']
console.log(a);