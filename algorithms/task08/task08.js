const arr = [1, 2, 1, 'min', 'max', 'max', 'min']


function removeDuplicateMembersArray(arr) {
  const set = new Set(arr);
  return set;
}
let a = removeDuplicateMembersArray(arr); // [1, 2, 'min', 'max']
console.info(a);
