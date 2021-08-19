function add(x, y) {
  return x + y
} 

function getSumSpecial(x) {
  const y = 3;
  const info = add(x, y);
  console.info('task10 [8]', info);
  return info;
}

let a = getSumSpecial(5); // 8
console.info('task10 [13]', a);
a = getSumSpecial(7); // 10
console.info(a);
a = getSumSpecial(8); // 11
console.info(a);
a = getSumSpecial(12); // 15
console.info(a);