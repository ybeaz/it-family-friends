let a = 97;
function isPrime(a) {
  let j = false;
  let i = 2;
  for (i = 2; i*i <= a && j != true; i++){
    if (a % i === 0){
      j = true;
    }
  }
    if (j === true) {
      return false;
    }
    else {
      return true;
    }
}
console.info(isPrime(a));