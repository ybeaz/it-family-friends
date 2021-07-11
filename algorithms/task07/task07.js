let a = 13;
const isPrime = (a)  => {
  let j = false;
  let i = 2;
  for (i = 2; i < a && j !== true; i++){
    if (a % i === 0){
      j = true;
    }
  }
      return j !== true;
}
console.info(isPrime(a));