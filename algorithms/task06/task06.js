let a = 0;
function IsInteger(a) {
  if (isNaN(a)){
    return false;
  }
  else {
    return true;
  }
}
console.info(IsInteger(a));
console.info(Number.isInteger(a));
