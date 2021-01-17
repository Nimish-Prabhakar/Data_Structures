/*

Reverse a string 

*/

// Method 1
class StringReverse {
  constructor() {}

  reverse(string) {
    const reversedArray = [];
    for (let i = string.length - 1; i >= 0; i--) {
      reversedArray.push(string[i]);
    }
    return reversedArray.join('');
  }
}

// Method 2
const StringReversal = (array) => {
  return array.split('').reverse().join('');
};
