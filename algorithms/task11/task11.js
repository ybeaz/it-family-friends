/*
Description: to suggest (an object) that helps write letters with predefined congratulation as a private variable
File name: letterTemplate.test.js
*/
const letterTemplate = {
  op: "Hey",
  fin: "Yours, Anna",
  write: function (str, str1) {
  const sign = ' Yours, Anna';
    const res = 'Hey, ' + str + ' ' + str1 + sign;
    console.info(res);
  return res;
    }
};

const a = letterTemplate.write('Marina', 'Happy Birthday to you!') // ‘Hey, Marina, Happy Birthday to you, Yours, Anna’
const b = letterTemplate.write('Alex', 'Happy New Year!') // ‘Hey, Alex’, Happy New Year! Yours, Anna’
const c = letterTemplate.write('Nata', 'My congratulations with marriage!') // ‘Hey, Nata, My congratulations with marriage! Yours, Anna’