let a = 5.5;
function IsInteger(a) {
  if (a%1 === 0){
    return true;
  }
  else {
    return false;
  }
}
console.info(IsInteger(a));
console.info(Number.isInteger(a));